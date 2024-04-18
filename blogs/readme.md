# FastAPI Blog Management API

This microservice provides APIs for managing a simple blog system. It allows users to add, retrieve, and upload images for blog posts.

## How to Run the Project

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/AshFahim/GhewMew
    ```

2. Navigate to the project directory:

    ```bash
    cd blogs
    ```

3. Install the dependencies:

    ```bash
    pip install -r requirements.txt
    ```

4. Ensure that your MySQL database is set up and configured correctly. Adjust the database connection settings in `lib.db` module if necessary.

5. Run the FastAPI server:

    ```bash
    uvicorn app:app --reload --port 3400
    ```

6. Once the server is running, you can access the API endpoints using tools like Postman or by sending HTTP requests programmatically. You can also utilize the interactive API documentation provided by FastAPI at http://127.0.0.1:3400/docs.

## API Endpoints

### 1. Add Blog

- **Endpoint**: `/addblog`
- **Method**: PUT
- **Input**: JSON object with blog details (title, content, author, created_at)
- **Output**: JSON response indicating the status of the addition process and a message.
- **Error Handling**: All fields are required.

### 2. Get All Blogs

- **Endpoint**: `/blogs`
- **Method**: GET
- **Output**: JSON response containing a list of all blogs in the database.

### 3. Get Blog by ID

- **Endpoint**: `/blog/{id}`
- **Method**: GET
- **Input**: Blog ID as a path parameter
- **Output**: JSON response containing the details of the blog with the specified ID.

### 4. Upload Image for Blog

- **Endpoint**: `/upload-image/`
- **Method**: POST
- **Input**: Blog ID as a path parameter and an image file
- **Output**: JSON response indicating the status of the image upload process and a message, along with the filename of the uploaded image.


