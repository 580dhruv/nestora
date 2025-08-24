import pymongo

# Connect to local MongoDB
client = pymongo.MongoClient("mongodb://localhost:27017/")

# Use your database
db = client['realestate_db']

# Define collections for easy access
properties_collection = db["properties"]
users_collection = db["users"]
