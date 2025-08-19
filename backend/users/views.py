from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def profile(request):
    return Response({
        "message": "Hello Captain!",
        "user": request.user  # JWT payload from Auth0
    })
