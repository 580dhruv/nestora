import json
import requests
from jose import jwt
from django.conf import settings
from rest_framework import authentication, exceptions

class Auth0JSONWebTokenAuthentication(authentication.BaseAuthentication):
    def authenticate(self, request):
        auth = request.headers.get("Authorization", None)
        if not auth:
            return None

        parts = auth.split()

        if parts[0].lower() != "bearer":
            raise exceptions.AuthenticationFailed("Authorization header must start with Bearer")
        elif len(parts) == 1:
            raise exceptions.AuthenticationFailed("Token not found")
        elif len(parts) > 2:
            raise exceptions.AuthenticationFailed("Authorization header must be Bearer token")

        token = parts[1]

        try:
            header = jwt.get_unverified_header(token)
        except jwt.JWTError:
            raise exceptions.AuthenticationFailed("Invalid header")

        jwks = requests.get(f"https://{settings.AUTH0_DOMAIN}/.well-known/jwks.json").json()
        rsa_key = {}
        for key in jwks["keys"]:
            if key["kid"] == header["kid"]:
                rsa_key = {
                    "kty": key["kty"],
                    "kid": key["kid"],
                    "use": key["use"],
                    "n": key["n"],
                    "e": key["e"]
                }
        if rsa_key:
            try:
                payload = jwt.decode(
                    token,
                    rsa_key,
                    algorithms=settings.ALGORITHMS,
                    audience=settings.API_IDENTIFIER,
                    issuer=f"https://{settings.AUTH0_DOMAIN}/"
                )
            except jwt.ExpiredSignatureError:
                raise exceptions.AuthenticationFailed("Token is expired")
            except jwt.JWTClaimsError:
                raise exceptions.AuthenticationFailed("Incorrect claims")
            except Exception:
                raise exceptions.AuthenticationFailed("Unable to parse authentication token")

            return (payload, token)

        raise exceptions.AuthenticationFailed("Unable to find appropriate key")
