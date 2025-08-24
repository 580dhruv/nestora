# # Create your models here.
# from django.contrib.auth.models import AbstractUser
# from django.db import models

# class User(AbstractUser):
#     email = models.EmailField(unique=True)
#     phone = models.CharField(max_length=15, blank=True, null=True)
#     is_seller = models.BooleanField(default=False)  # to identify sellers

#     def __str__(self):
#         return self.username

from mongoengine import Document, StringField, EmailField
from django.contrib.auth.hashers import make_password, check_password


class User(Document):
    email = EmailField(required=True, unique=True)
    password = StringField(required=True)

    meta = {"collection": "users"}  # MongoDB collection name

    def set_password(self, raw_password):
        """Hash password before saving"""
        self.password = make_password(raw_password)

    def check_password(self, raw_password):
        """Validate a password against the stored hash"""
        return check_password(raw_password, self.password)

    def save(self, *args, **kwargs):
        """Ensure password is always hashed before saving"""
        if not self.password.startswith("pbkdf2_"):  # Avoid double hashing
            self.set_password(self.password)
        return super(User, self).save(*args, **kwargs)
