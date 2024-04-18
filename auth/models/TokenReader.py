import jwt
from datetime import datetime, timedelta

def decode_token(token, secret_key):
    try:
        # Decode the token using the provided secret key
        payload = jwt.decode(token, secret_key, algorithms=["HS256"])

        # Check if the token has expired
        if datetime.utcnow() > datetime.fromtimestamp(payload['exp']):
            return {"status": False, "message": "Token has expired"}

        # Return the decoded payload
        return {"status": True, "payload": payload, "message": "Token decoded successfully"}
    except jwt.ExpiredSignatureError:
        return {"status": False, "message": "Token has expired"}
    except jwt.InvalidTokenError:
        return {"status": False, "message": "Invalid token"}