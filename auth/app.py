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
#cors
from fastapi.middleware.cors import CORSMiddleware
from config.CORS import origins


app = FastAPI() # Create a FastAPI instance

###################################################################################################
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET","POST","PUT","DELETE","PATCH"],
    allow_headers=["Authorization", "Content-Type"],
)
@app.middleware("http")
async def add_security_headers(request, call_next):
    response = await call_next(request)
    response.headers["Content-Security-Policy"] = "default-src 'self'; script-src 'self'"
    response.headers["X-XSS-Protection"] = "1; mode=block"
    return response
###################################################################################################


@app.get("/")
def greet():
    return {"message": "Hello World"}

#to register user
@app.post("/register/user")
async def register_user(user: UserSignUp):
    
    data = {
        "name": user.name,
        "email": user.email,
        "password": user.password,
        "user_type": "user",
        "date": dt.datetime.now()
    }
    payload = {
                'email': user.email,
                'exp': datetime.utcnow() + timedelta(hours=3)  # Expiration time
                }
    if RegisterUser(data) == True:
        token = jwt.encode(payload, "secret", algorithm="HS256")
        return {"status": True, "message": "User registered successfully" , "token": token}
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
    if response["status"]:
        return True
    else:
        return False

#to check frontend is working or not
@app.get("/api")
async def api():
    return {"message": "API is working"}







#python -m uvicorn app:app --reload --port 3700