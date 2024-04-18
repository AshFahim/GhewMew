from db.database import cursor
import jwt
import bcrypt
from datetime import datetime, timedelta

def verify_password(password, hashed_password):
    hashed_password = hashed_password.encode('utf-8')
    if bcrypt.checkpw(password.encode('utf-8'), hashed_password):
        return True
    else:
        return False


def AuthenticateUser(data):
    try:
        cursor.execute("SELECT * FROM Users WHERE email = %s", (data["email"],))
        existing_user = cursor.fetchone()
        
        if not existing_user:
            return {
                "status": False,
                "token": None,
                "message": "User not found"
            }
            
        elif not verify_password(data["password"], existing_user[3]):
            return {
                "status": False,
                "token": None,
                "message": "Incorrect password"
            }
            
        elif verify_password(data["password"], existing_user[3]):
            # Assuming `data` contains the email and `existing_user` contains the serial
            payload = {
                'email': data["email"],
                'exp': datetime.utcnow() + timedelta(hours=3)  # Expiration time
                }

# Encode the token with the payload and secret key
            token = jwt.encode(payload, "secret", algorithm="HS256")
            return {
                "status": "True",
                "token": token,
                "message": "User authenticated successfully"
            }   
            
    except Exception as e:
        print(e)
        return {
            "status": False,
            "token": None,
            "message": "User authentication failed"
        }