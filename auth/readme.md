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
