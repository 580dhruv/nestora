# # users/views.py
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework.permissions import AllowAny  # allow unauthenticated for initial save
# from db import db  # MongoDB connection
# from rest_framework.permissions import IsAuthenticated  # ✅ Add this
# from rest_framework import authentication, exceptions      # ✅ Add this for JWT auth
# from jose import jwt   
# from django.conf import settings
# users_collection = db['users']
# class Auth0JSONWebTokenAuthentication(authentication.BaseAuthentication):
#     def authenticate(self, request):
#         auth_header = request.headers.get("Authorization")
#         if not auth_header:
#             return None  # No auth header, let permission_classes handle it

#         parts = auth_header.split()
#         if parts[0].lower() != "bearer" or len(parts) != 2:
#             raise exceptions.AuthenticationFailed("Invalid Authorization header")

#         token = parts[1]

#         try:
#             payload = jwt.decode(
#                 token,
#                 settings.AUTH0_CLIENT_SECRET,  # Your Auth0 client secret
#                 algorithms=["HS256"],
#                 audience=settings.AUTH0_CLIENT_ID,
#             )
#         except Exception as e:
#             raise exceptions.AuthenticationFailed(f"Invalid token: {str(e)}")

#         return (payload, token)  # payload acts as request.user

# # ------------------------
# # Get current user's profile
# # ------------------------
# class ProfileView(APIView):
#     authentication_classes = [Auth0JSONWebTokenAuthentication]  # ✅ Add this
#     permission_classes = [IsAuthenticated]

#     def get(self, request):
#         try:
#             user_email = request.user.get("email")  # request.user is now the JWT payload
#             user_data = users_collection.find_one({"email": user_email}, {"_id": 0})
            
#             if not user_data:
#                 return Response({"message": "User not found in MongoDB"}, status=404)
            
#             return Response({"user": user_data})
#         except Exception as e:
#             return Response({"error": str(e)}, status=400)


# # ------------------------
# # Update user profile / preferences
# # ------------------------
# class UpdateProfileView(APIView):
#     authentication_classes = [Auth0JSONWebTokenAuthentication]
#     permission_classes = [IsAuthenticated]

#     def post(self, request):
#         try:
#             user_email = request.user.get("email")
#             update_data = request.data  # e.g., {"name": "New Name", "preferences": {...}}

#             result = users_collection.update_one(
#                 {"email": user_email},
#                 {"$set": update_data},
#                 upsert=True
#             )

#             return Response({"modified_count": result.modified_count})
#         except Exception as e:
#             return Response({"error": str(e)}, status=400)


# # ------------------------
# # Save a property for the user
# # ------------------------
# class SavePropertyView(APIView):
#     authentication_classes = [Auth0JSONWebTokenAuthentication]
#     permission_classes = [IsAuthenticated]

#     def post(self, request):
#         try:
#             user_email = request.user.get("email")
#             property_id = request.data.get("property_id")

#             if not property_id:
#                 return Response({"error": "property_id required"}, status=400)

#             users_collection.update_one(
#                 {"email": user_email},
#                 {"$addToSet": {"saved_properties": property_id}},
#                 upsert=True
#             )

#             return Response({"message": "Property saved successfully"})
#         except Exception as e:
#             return Response({"error": str(e)}, status=400)


# # ------------------------
# # Get user's saved properties
# # ------------------------
# class SavedPropertiesView(APIView):
#     authentication_classes = [Auth0JSONWebTokenAuthentication]
#     permission_classes = [IsAuthenticated]

#     def get(self, request):
#         try:
#             user_email = request.user.get("email")
#             user_data = users_collection.find_one(
#                 {"email": user_email},
#                 {"_id": 0, "saved_properties": 1}
#             )

#             saved_properties = user_data.get("saved_properties", []) if user_data else []

#             return Response({"saved_properties": saved_properties})
#         except Exception as e:
#             return Response({"error": str(e)}, status=400)

# # ------------------------
# # Save Auth0 user data
# # ------------------------
# class SaveAuth0UserView(APIView):
#     permission_classes = [AllowAny]  # anyone can call this

#     def post(self, request):
#         try:
#             user_data = request.data
#             if not user_data.get("email"):
#                 return Response({"error": "Email is required"}, status=400)

#             # Upsert: add if not exists, update if exists
#             result = users_collection.update_one(
#                 {"email": user_data["email"]},
#                 {"$set": user_data},
#                 upsert=True
#             )

#             return Response({
#                 "status": "success",
#                 "modified_count": result.modified_count,
#                 "email": user_data["email"]
#             })
#         except Exception as e:
#             return Response({"error": str(e)}, status=400)

from django.contrib.auth import authenticate
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import User
from django.contrib.auth.hashers import make_password, check_password
import json, datetime
import jwt
from django.conf import settings
from .models import User  # adjust import according to your project
from jwt.exceptions import ExpiredSignatureError, InvalidTokenError

@csrf_exempt
def user_login(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            email = data.get("email")
            password = data.get("password")

            # Fetch user from MongoDB
            user = User.objects(email=email).first()
            if not user:
                return JsonResponse({"error": "User not found"}, status=404)

            # Verify password
            if not check_password(password, user.password):
                return JsonResponse({"error": "Invalid credentials"}, status=401)

            # Create JWT token (similar to register)
            payload = {
                "user_id": str(user.id),
                "email": user.email,
                "exp": datetime.datetime.utcnow() + datetime.timedelta(days=1)
            }
            token = jwt.encode(payload, settings.SECRET_KEY, algorithm="HS256")

            # Build response
            response = JsonResponse({
                "message": "Login successful",
                "user": {
                    "id": str(user.id),
                    "email": user.email
                }
            })

            # Set cookie
            response.set_cookie(
                key="auth_token",
                value=token,
                httponly=True,
                samesite="Lax",
                secure=False  # set True if using HTTPS
            )

            # Add CORS headers
            response["Access-Control-Allow-Origin"] = "http://localhost:5173"
            response["Access-Control-Allow-Credentials"] = "true"

            return response

        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Invalid request method"}, status=405)

@csrf_exempt
def register(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            email = data.get("email")
            password = data.get("password")

            if User.objects(email=email).first():
                return JsonResponse({"error": "Email already exists"}, status=400)

            user = User(email=email, password=make_password(password))
            user.save()

            # Create JWT token
            payload = {
                "user_id": str(user.id),
                "email": user.email,
                "exp": datetime.datetime.utcnow() + datetime.timedelta(days=1)  # expires in 1 day
            }
            token = jwt.encode(payload, settings.SECRET_KEY, algorithm="HS256")

            # Build response
            response = JsonResponse({
                "message": "User registered successfully",
                "user": {
                    "id": str(user.id),
                    "email": user.email
                }
            }, status=201)

            # Set cookie
            response.set_cookie(
                key="auth_token",
                value=token,
                samesite="Lax",
                secure=False  # set True if using HTTPS
            )

            return response

        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)

    return JsonResponse({"error": "Invalid request method"}, status=405)


@csrf_exempt
def logout(request):
    if request.method == "POST":
        response = JsonResponse({"message": "Logged out"})
        response.delete_cookie("auth_token")
        return response
    return JsonResponse({"error": "Invalid request method"}, status=405)

@csrf_exempt
def check_auth(request):
    try:
        token = request.COOKIES.get("auth_token")
        if not token:
            return JsonResponse({"authenticated": False}, status=200)

        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=["HS256"])

        return JsonResponse({
            "authenticated": True,
            "user": {
                "id": payload.get("user_id"),
                "email": payload.get("email")
            }
        })

    except ExpiredSignatureError:
        return JsonResponse({"authenticated": False}, status=200)
    except InvalidTokenError:
        return JsonResponse({"authenticated": False}, status=200)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)