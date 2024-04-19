# Pet Adoption Website

This is a pet adoption website project that aims to connect potential pet owners with adoptable pets. The website provides information about different types of pets available for adoption, their characteristics, and how to proceed with the adoption process.

## Features

- Browse and search for adoptable pets based on various criteria such as species, breed, age, and location.
- View detailed profiles of each pet, including their name, description, photos, and contact information.
- Contact the pet shelter or rescue organization directly to inquire about a specific pet or to initiate the adoption process.
- Learn about responsible pet ownership, including tips on pet care, training, and health.

## Technologies Used

- FastAPI 
- JavaScript
- React.js
- Node.js
- MySQL

 
# FastAPI User Authentication API

This "auth" microservice is a simple User Authentication API built using FastAPI, allowing users to register, login, and access user information.

## How to Run the Project

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/AshFahim/GhewMew
    ```

2. Navigate to the project directory:

    ```bash
    cd auth
    ```

3. Install the dependencies:

    ```bash
    pip install -r requirements.txt
    ```

4. Run the FastAPI server:

    ```bash
    uvicorn app:app --reload --port 3700
    ```

5. Once the server is running, you can access the API endpoints using a tool like Postman or by sending HTTP requests programmatically. You can also use http://127.0.0.1:3700/docs 

## API Endpoints

### 1. Register User

- **Endpoint**: `/register/user`
- **Method**: POST
- **Input**: JSON object with user details (username, email, password)
- **Output**: JSON response indicating the status of the registration process and a message.
- **error handaling**: Already existing email, invalid email 

### 2. Login User

- **Endpoint**: `/login/user`
- **Method**: POST
- **Input**: JSON object with user email and password
- **Output**: JSON response indicating the status of the authentication process and a message, along with an authentication token if successful.

### 3. Get All Users

- **Endpoint**: `/users`
- **Method**: GET
- **Output**: JSON response containing a list of all users in the database.

### 4. Get User by ID

- **Endpoint**: `/users/{user_id}`
- **Method**: GET
- **Input**: User ID as a path parameter
- **Output**: JSON response containing the details of the user with the specified ID.

### 5. Read Token

- **Endpoint**: `/tokenreader/{token}`
- **Method**: PUT
- **Input**: Authentication token as a path parameter
- **Output**: JSON response containing information decoded from the token.


# Pet Information API

This "pet" microservice is a simple Pet Information API built using FastAPI, allowing users to create, read and delete pet information, fetch pet information based on their type, gender, location, and also allows uploading of pet images.


## How to Run the Project

1. Make sure you have cloned the repository and have following all the instructions from the root README.md file.

2. Navigate to the pet services directory:

    ```bash
    cd pets
    ```

3. Run the FastAPI server:

    ```bash
    uvicorn main:app --reload
    ```

4. Once the server is running, you can access the API endpoints using a tool like Postman or by sending HTTP requests programmatically.

 
## API Endpoints

### 1. Add a Pet

- **Endpoint**: `/pets/`
- **Method**: POST
- **Input**: JSON object with pet details (owner_id, pet_type, pet_gender, pet_age, description, location)
- **Output**: JSON response indicating the status of the pet creation and a message.

### 2. Get All Pets Information

- **Endpoint**: `/pets/`
- **Method**: GET
- **Output**: JSON response containing a list of all pets and their details in the database.

### 3. Get Pet by ID

- **Endpoint**: `/pets/{pet_id}`
- **Method**: GET
- **Input**: Pet ID as a path parameter
- **Output**: JSON response containing the details of the pet with the specified ID.

### 4. Get Pets by Type

- **Endpoint**: `/pets/type/{pet_type}`
- **Method**: GET
- **Input**: Pet type as a path parameter
- **Output**: JSON response containing all pets of the specified type.

### 5. Get Pets by Gender

- **Endpoint**: `/pets/gender/{pet_gender}`
- **Method**: GET
- **Input**: Pet gender as a path parameter
- **Output**: JSON response containing all pets of the specified gender.

### 6. Get Pets by Location 

- **Endpoint**: `/pets/location/{location_city}`
- **Method**: GET
- **Input**: Location city as a path parameter
- **Output**: JSON response containing all pets from the specified location.

### 7. Delete a Pet by ID

- **Endpoint**: `/pets/{pet_id}`
- **Method**: DELETE
- **Input**: Pet ID as a path parameter
- **Output**: JSON response indicating the status of the deletion process and a message.

### 8. Upload Pet Image

- **Endpoint**: `/pets/{pet_id}/upload_image`
- **Method**: POST
- **Input**: Pet ID as a path parameter and an image file
- **Output**: JSON response indicating the status of the upload process and a message.


## Note:

While sending the image make sure to use multipart/form-data as it's required for file sending. An example header could be:
"Content-Type: multipart/form-data; boundary=<calculated when request is sent>".


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


