from django.urls import path
from . import views

urlpatterns = [
    # path("profile/", views.ProfileView.as_view(), name="profile"),
    # path("profile/update/", views.UpdateProfileView.as_view(), name="update-profile"),
    # path("properties/save/", views.SavePropertyView.as_view(), name="save-property"),
    # path("properties/saved/", views.SavedPropertiesView.as_view(), name="saved-properties"),
    
    # # New endpoint to save Auth0 user data
    # path("auth0/save-user/", views.SaveAuth0UserView.as_view(), name="save-auth0-user"),
    path("register/",views.register,name = "register"),
    path("login/",views.user_login,name = "login"),
    path("logout/",views.logout,name = "logout"),
    path("checkAuth/",views.check_auth,name = "logout")
]