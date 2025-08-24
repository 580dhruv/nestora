from django.urls import path
from .views import predict_house_price

urlpatterns = [
    path("", predict_house_price, name="predict-house-price"),
]
