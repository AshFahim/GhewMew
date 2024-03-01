import uvicorn
from fastapi import FastAPI
from lib.db import cursor 
from fastapi import  HTTPException
from pydantic import BaseModel, Field


class Blog(BaseModel):
    title: str
    content: str
    author: str 
    created_at: str
    

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Auth server is running"}

@app.put("/addblog")
async def add_blog(blog:Blog):
    # validate incoming data from Blog 
    if not([blog.title, blog.content, blog.author, blog.created_at]):
        raise HTTPException(status_code=400, detail="All fields are required")
    
    values = (blog.title, blog.content, blog.author, blog.created_at)
    
    query = """ 
    INSERT INTO `blogs` (`title`, `content`, `author`, `created_at`)
    VALUES (%s, %s, %s, %s)
    """
    try:
        cursor.execute(query, values)
        return {"message": "Blog added successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail="Internal server error")
    
    
@app.get("/blogs")
async def getallblogs():
    
    query = "SELECT * FROM blogs"
    
    try:
        cursor.execute(query)
        blogs = cursor.fetchall()
        return blogs
        
    except Exception as e:
        raise HTTPException(status_code=500, detail="Internal server error")
    
    
@app.get("/blog/{id}")
async def getID(id: int):
    print(id)
    query = f"SELECT * FROM blogs WHERE id = {id}"
    
    try:
        cursor.execute(query)
        blog = cursor.fetchall()
        print(blog)
        return blog
    except Exception as e:
        raise HTTPException(status_code=500, detail="Internal server error")
    
    
    
#change directory to blog    
#python -m uvicorn app:app --reload --port 3700