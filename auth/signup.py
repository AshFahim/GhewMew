from fastapi import APIRouter, HTTPException, status, Depends
from pydantic import BaseModel
from motor.motor_asyncio import AsyncIOMotorClient

router = APIRouter()

# MongoDB Configuration
MONGO_USERNAME = "your_username"
MONGO_PASSWORD = "your_password"
MONGO_HOST = "localhost"
MONGO_PORT = "27017"
MONGO_DB = "authentication_db"
MONGO_COLLECTION = "users"

# Connect to MongoDB
client = AsyncIOMotorClient(
    f"mongodb://{MONGO_USERNAME}:{MONGO_PASSWORD}@{MONGO_HOST}:{MONGO_PORT}/{MONGO_DB}"
)
db = client[MONGO_DB]
collection = db[MONGO_COLLECTION]

class User(BaseModel):
    username: str
    email: str

class UserInDB(User):
    hashed_password: str

async def get_user(email: str):
    user = await collection.find_one({"email": email})
    if user:
        return UserInDB(**user)

async def create_user(user: UserInDB):
    user_dict = user.dict()
    user_dict["hashed_password"] = get_password_hash(user.hashed_password)
    del user_dict['hashed_password']
    result = await collection.insert_one(user_dict)
    return result

@router.post("/signup/", response_model=User)
async def signup(user: UserInDB):
    user_exist = await get_user(user.email)
    if user_exist:
        raise HTTPException(status_code=400, detail="Email already registered")
    await create_user(user)
    return user
