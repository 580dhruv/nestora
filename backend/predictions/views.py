# predictions/views.py
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .ml_model import predict_price


@csrf_exempt
def predict_house_price(request):
    if request.method == "POST":
        try:
            # Parse request body (JSON from React form)
            data = json.loads(request.body.decode("utf-8"))

            # Call ML model
            prediction = predict_price(data)

            return JsonResponse({
                "success": True,
                "predicted_price": prediction
            })

        except ValueError as ve:
            return JsonResponse({"success": False, "error": str(ve)}, status=400)

        except Exception as e:
            return JsonResponse({"success": False, "error": f"Unexpected error: {e}"}, status=500)

    return JsonResponse({"success": False, "error": "Only POST allowed"}, status=405)
