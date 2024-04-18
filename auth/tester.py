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

# Example usage:
token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVnYUBnbWFpbC5jb20iLCJzZXJpYWwiOjcsImV4cCI6MTcxMzQ1MDc3Mn0.pwJOcJdPuNjmhsLedfBKDJxWAv1UQWDjApN2oNsqgUA"
secret_key = "secret"

result = decode_token(token, secret_key)
print(result)
