import uvicorn
from fastapi import FastAPI
from database.db import cursor 
from fastapi import  HTTPException
from datatype.datatype import UserModel_Login, UserModel_Signup, UserModel_Remove
app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Auth server is running"}

@app.post("/adduser/")
async def create_user(user: UserModel_Signup):
    #if usertype not in ["user", "admin"]:
        #raise HTTPException(status_code=400, detail="Invalid user type")
        #usertype = "user"
    
    if not ([user.name, user.email, user.password]):
        raise HTTPException(status_code=400, detail="All fields are required")

    query = """
            INSERT INTO users (name, email, password, user_type)
            VALUES (%s, %s, %s, %s)
        """
    values = (user.name, user.email, user.password, "user")

    try:
        cursor.execute(query, values)
        return {"message": "User added successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail="Internal server error")
    
#python -m uvicorn app:app --reload --port 3600