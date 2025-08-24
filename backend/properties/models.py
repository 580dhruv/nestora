import mongoengine as me
from datetime import datetime
from mongoengine import Document, StringField, IntField, ListField, DictField, ReferenceField

class Property(me.Document):
    # Reference to User
    owner = me.ReferenceField("User", reverse_delete_rule=me.CASCADE, required=True)

    # Core Info
    title = me.StringField(max_length=255, required=False, null=True)
    address = me.StringField(max_length=500, required=True)
    beds = me.IntField(min_value=0, required=True)
    baths = me.IntField(min_value=0, required=True)
    size = me.IntField(min_value=0, required=True)
    price = me.DecimalField(min_value=0, precision=2, required=True)

    # Optional
    lotSize = me.IntField(min_value=0, required=False, null=True)
    yearBuilt = me.IntField(min_value=1800, max_value=datetime.now().year, required=False, null=True)
    garage = me.StringField(max_length=50, required=False, null=True)
    heating = me.StringField(max_length=50, required=False, null=True)
    cooling = me.StringField(max_length=50, required=False, null=True)

    # Description
    description = me.StringField(required=False, null=True)

    # Amenities
    amenities = me.DictField(default=dict)

    # Images (list of URLs or filenames)
    images = ListField(StringField())  #

    # Meta
    created_at = me.DateTimeField(default=datetime.utcnow)
    is_available = me.BooleanField(default=True)

    meta = {
        "collection": "properties",  # MongoDB collection name
        "ordering": ["-created_at"]
    }

    def __str__(self):
        return f"{self.title or 'Property'} - {self.address}"
