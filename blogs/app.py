import uvicorn
from fastapi import FastAPI
from lib.db import cursor 


app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Auth server is running"}


#python -m uvicorn app:app --reload --port 3700