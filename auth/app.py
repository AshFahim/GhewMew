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

#to register user
@app.post("/register/user")
async def register_user(user: UserSignUp):
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
    
#to authenticate user    
@app.post("/login/user")
async def login_user(user: UserAuthenticate):
    data = {
        "email": user.email,
        "password": user.password
    }
    response = AuthenticateUser(data)
    print(response)
    if response["status"]:
        return {"status": True, "message": "User authenticated successfully", "token": response["token"]}
    else:
        return {"status": False, "message": response["message"]}
    
#to get all users
@app.get("/users")
async def get_users():
    cursor.execute("SELECT * FROM Users")
    users = cursor.fetchall()
    return {"users": users}

#to get a user by id
@app.get("/users/{user_id}")
async def get_user(user_id: int):
    cursor.execute("SELECT * FROM Users WHERE serial = %s", (user_id,))
    user = cursor.fetchone()
    data = {
        "id": user[0],
        "username": user[1],
        "email": user[2]
    }
    return data 

@app.delete("/users/{user_id}")
async def remove_user(user_id: int):
    cursor.execute("DELETE FROM Users WHERE serial = %s", (user_id,))
    return {"message": "User removed successfully"}


#to check token is working or not
@app.put("/tokenreader/{token}")
async def read_token(token: str):
    secret_key = "secret"
    response = decode_token(token, secret_key)
    return response

#to check frontend is working or not
@app.get("/api")
async def api():
    return {"message": "API is working"}







#python -m uvicorn app:app --reload --port 3700