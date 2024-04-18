import uvicorn
from fastapi import FastAPI
from db.database import cursor
import jwt
import datetime as dt 
from datetime import datetime, timedelta 
#models
from models.RegisterUser import RegisterUser
from models.AuthUser import AuthenticateUser
from models.TokenReader import decode_token


#schemas
from schemas.user import User, UserSignUp, UserUpdate, UserRemove, UserAuthenticate, UserAuthenticateResponse

#controllers
 


app = FastAPI()

@app.get("/")
def greet():
    return {"message": "Hello World"}


@app.post("/register/user")
def register_user(user: UserSignUp):
    data = {
        "name": user.username,
        "email": user.email,
        "password": user.password,
        "user_type": "user",
        "date": dt.datetime.now()
    }
    if RegisterUser(data) == True:
        return {"status": True, "message": "User registered successfully"}
    elif RegisterUser(data) == False:
        return {"status": False, "message": "User registration failed"}
    elif RegisterUser(data) == "Email exists":
        return {"status": False, "message": 'Email already in use. Please try another one.'}
    elif RegisterUser(data) == "Invalid email":
        return {"status": False, "message": 'Invalid email. Please enter a valid email.'}
    else:
        return {"status": False, "message": "User registration failed"}
    
@app.post("/login/user")
def login_user(user: UserAuthenticate):
    data = {
        "email": user.email,
        "password": user.password
    }
    response = AuthenticateUser(data)
    if response["status"]:
        return {"status": True, "message": "User authenticated successfully", "token": response["token"]}
    else:
        return {"status": False, "message": "User authentication failed"}
    

@app.get("/users")
def get_users():
    cursor.execute("SELECT * FROM Users")
    users = cursor.fetchall()
    return {"users": users}

@app.get("/users/{user_id}")
def get_user(user_id: int):
    cursor.execute("SELECT * FROM Users WHERE serial = %s", (user_id,))
    user = cursor.fetchone()
    data = {
        "id": user[0],
        "username": user[1],
        "email": user[2]
    }
    return data 

@app.put("/tokenreader/{token}")
def read_token(token: str):
    secret_key = "secret"
    response = decode_token(token, secret_key)
    return response










#python -m uvicorn app:app --reload --port 3700