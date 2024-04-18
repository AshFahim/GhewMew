import datetime as dt 
from pydantic import BaseModel

class User(BaseModel):
    id: int
    username: str
    email: str
    
class UserSignUp(BaseModel):
    name: str
    email: str
    password: str
    
class UserUpdate(BaseModel):
    username: str
    email: str
    password: str
    user_type: str
    
    
class UserRemove(BaseModel):
    email: str
    
class UserAuthenticate(BaseModel):
    email: str
    password: str

class UserAuthenticateResponse(BaseModel):
    status: bool
    token: str

