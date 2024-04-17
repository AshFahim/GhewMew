
import os
from io import BytesIO
from fastapi import FastAPI, File, UploadFile

from lib.db import cursor 
from fastapi import  HTTPException
from pydantic import BaseModel

from PIL import Image

IMAGEDIR = "img/"
app = FastAPI()

class Blog(BaseModel):
    title: str
    content: str
    author: str 
    created_at: str
    


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
    
@app.post("/upload-image/")
async def upload_image(blog_id: int, file: UploadFile = File(...)):
    # Ensure the image directory exists
    os.makedirs(IMAGEDIR, exist_ok=True)
    
    # Read the image file
    image_contents = await file.read()
    
    # Open the image using Pillow
    img = Image.open(BytesIO(image_contents))
    
    # Rename the image to its corresponding ID
    img_filename = f"{blog_id}_{file.filename}"
    
    # Save the image to the specified directory
    img_path = os.path.join(IMAGEDIR, img_filename)
    img.save(img_path)
    
    return {"message": "Image uploaded successfully", "filename": img_filename}
    
#change directory to blog    
#python -m uvicorn app:app --reload --port 3700