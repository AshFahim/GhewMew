from pydantic import BaseModel, Field

# creating a data type for fastapi to recieve post request

class UserModel_Login(BaseModel):
    email: str
    password: str

class UserModel_Signup(BaseModel):
    name: str
    email: str
    password: str
    bio : str
    profile_picture: str

class UserModel_Login(BaseModel):
    email: str
    password: str

class UserModel_Remove(BaseModel):
    id: str


