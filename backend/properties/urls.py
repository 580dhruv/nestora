from django.urls import path
from . import views

urlpatterns = [
    path("list/", views.list_properties, name="list-properties"),
    path("add/", views.add_property, name="add-property"),
    path("update/", views.update_property, name="update-property"),
    path("delete/", views.delete_property, name="delete-property"),
    # backend
    path("<str:property_id>/", views.property_detail, name="property-detail")
] 
# + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

