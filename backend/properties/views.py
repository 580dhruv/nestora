import jwt
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from .models import Property
from users.models import User
import json
from mongoengine.errors import ValidationError
from bson import ObjectId,json_util
import os

def list_properties(request):
    if request.method == "GET":
        try:
            properties = Property.objects.all()
            data = []
            for prop in properties:
                data.append({
                    "id": str(prop.id),
                    "title": prop.title,
                    "address": prop.address,
                    "beds": int(prop.beds),
                    "baths": int(prop.baths),
                    "size": int(prop.size),
                    "price": float(prop.price),
                    "imageUrls": [str(img) for img in prop.images] if prop.images else [],
                })
            return JsonResponse(data, safe=False, status=200)
        except Exception as e:
            # Return the error for debugging
            return JsonResponse({"error": str(e)}, status=500)



# ✅ Add a new property


# helper to validate image extensions
def is_valid_image(filename):
    ext = os.path.splitext(filename)[1].lower()
    return ext in [".jpg", ".jpeg", ".png", ".gif"]

@csrf_exempt
def add_property(request):
    if request.method == "POST":
        try:
            token = request.COOKIES.get("auth_token")
            if not token:
                return JsonResponse({"error": "Authentication required"}, status=401)

            # Decode JWT
            try:
                payload = jwt.decode(token, settings.SECRET_KEY, algorithms=["HS256"])
                user_id = payload.get("user_id")
                user = User.objects.get(id=user_id)
            except (jwt.ExpiredSignatureError, jwt.DecodeError, User.DoesNotExist):
                return JsonResponse({"error": "Invalid or expired session"}, status=401)

            # Parse non-file data
            property_data = request.POST.dict()

            # Convert amenities from JSON string to dict
            if "amenities" in property_data:
                property_data["amenities"] = json.loads(property_data["amenities"])

            # Handle uploaded images
            uploaded_files = request.FILES.getlist("images")
            if not uploaded_files:
                return JsonResponse({"error": "At least one image is required"}, status=400)

            image_urls = []
            for f in uploaded_files:
                if not is_valid_image(f.name):
                    return JsonResponse({"error": f"Invalid file type: {f.name}"}, status=400)

                # Save file locally
                save_path = os.path.join(settings.MEDIA_ROOT, f.name)
                with open(save_path, "wb+") as dest:
                    for chunk in f.chunks():
                        dest.write(chunk)

                image_urls.append(f"/media/{f.name}")  # store URL/path as string

            property_data["images"] = image_urls

            # Create property object
            property_obj = Property(**property_data)
            property_obj.owner = user
            property_obj.save()

            return JsonResponse({"message": "Property saved successfully!"}, status=201)

        except ValidationError as e:
            return JsonResponse({"error": str(e)}, status=400)
        except Exception as e:
            return JsonResponse({"error": f"Unexpected error: {str(e)}"}, status=500)

# ✅ Update an existing property
def update_property(request):
    if request.method == "POST":  # or use PUT
        try:
            body = json.loads(request.body.decode("utf-8"))
            property_id = body.get("id")

            if not property_id:
                return JsonResponse({"error": "Property ID is required"}, status=400)

            prop = Property.objects.get(id=property_id)
            for key, value in body.items():
                if key != "id":
                    setattr(prop, key, value)
            prop.save()
            return JsonResponse({"message": "Property updated successfully!"}, status=200)

        except Property.DoesNotExist:
            return JsonResponse({"error": "Property not found"}, status=404)
        except ValidationError as e:
            return JsonResponse({"error": str(e)}, status=400)


# ✅ Delete a property
def delete_property(request):
    if request.method == "POST":  # or use DELETE
        try:
            body = json.loads(request.body.decode("utf-8"))
            property_id = body.get("id")

            if not property_id:
                return JsonResponse({"error": "Property ID is required"}, status=400)

            prop = Property.objects.get(id=property_id)
            prop.delete()
            return JsonResponse({"message": "Property deleted successfully!"}, status=200)

        except Property.DoesNotExist:
            return JsonResponse({"error": "Property not found"}, status=404)


# ✅ Get property details by ID
def property_detail(request, property_id):

    try:
        prop = Property.objects.get(id=ObjectId(property_id))
        data = {
            "id": str(prop.id),
            "title": prop.title,
            "address": prop.address,
            "beds": prop.beds,
            "baths": prop.baths,
            "size": prop.size,
            "price": float(prop.price),
            "images": prop.images,  # array of URLs
            "description": prop.description,
            "amenities": prop.amenities,
        }
        return JsonResponse(data, safe=False, status=200)
    except Property.DoesNotExist:
        return JsonResponse({"error": "Property not found"}, status=404)
