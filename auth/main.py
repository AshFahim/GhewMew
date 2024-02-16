from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
app = FastAPI()

@app.post("/create/")


@app.get("/test/{item_id}")
async def test(item_id: str):
    return{"Hello": item_id}

#to run in uvicorn server 
#uvicorn main:app --reload --port 3500    
