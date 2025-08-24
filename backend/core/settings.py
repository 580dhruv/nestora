from pathlib import Path
import mongoengine
import os
# -------------------------------
# Base directory
# -------------------------------
BASE_DIR = Path(__file__).resolve().parent.parent

# -------------------------------
# Security
# -------------------------------
SECRET_KEY = "django-insecure-sp!8fp()*)%wj2eetrwk()wwe!+w9rwqzalfu!^5#^tbc*p^_)"
DEBUG = True
ALLOWED_HOSTS = []

# -------------------------------
# Installed apps
# -------------------------------
INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",          # still needed for Django sessions/auth middleware
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "users",
    "properties",
    "corsheaders",
    "rest_framework",
]

# -------------------------------
# Middleware
# -------------------------------
MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

# -------------------------------
# URLs and WSGI
# -------------------------------
ROOT_URLCONF = "core.urls"
WSGI_APPLICATION = "core.wsgi.application"

# -------------------------------
# MongoDB Settings (MongoEngine)
# -------------------------------
MONGO_DB_NAME = "realestate_db"

mongoengine.connect(
    db=MONGO_DB_NAME,
    host="mongodb://localhost:27017/realestate_db",
    alias="default"
)

# -------------------------------
# Templates
# -------------------------------
TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

# -------------------------------
# DRF Settings
# -------------------------------
REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": [],
    "DEFAULT_PERMISSION_CLASSES": [],
}

# -------------------------------
# CORS Settings
# -------------------------
CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
]
  # allow all origins
CORS_ALLOW_CREDENTIALS = True   # allow cookies/auth headers

# -------------------------------
# Static files
# -------------------------------
STATIC_URL = "static/"

# -------------------------------
# Internationalization
# -------------------------------
LANGUAGE_CODE = "en-us"
TIME_ZONE = "UTC"
USE_I18N = True
USE_TZ = True

# -------------------------------
# Default primary key field type
# -------------------------------
DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))