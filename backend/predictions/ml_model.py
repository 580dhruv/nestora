# predictions/ml_model.py
import joblib
import os
import numpy as np

# Path to the trained model
MODEL_PATH = os.path.join(os.path.dirname(__file__), "house_price_model.pkl")

# Load the model once (at import time)
try:
    model = joblib.load(MODEL_PATH)
    print("✅ House price model loaded successfully!")
except Exception as e:
    print(f"❌ Error loading model: {e}")
    model = None


def predict_price(input_data: dict):
    """
    Predict house price given form input as a dictionary.
    
    Example input_data:
    {
        "OverallQual": 7,
        "GrLivArea": 2000,
        "GarageCars": 2,
        "TotalBsmtSF": 800,
        ...
    }
    """

    if model is None:
        raise RuntimeError("Model not loaded!")

    try:
        # Convert dict values to array (keep order consistent with training)
        features = np.array([list(input_data.values())]).astype(float)

        # Predict
        prediction = model.predict(features)[0]
        return round(prediction, 2)

    except Exception as e:
        raise ValueError(f"Error during prediction: {e}")
