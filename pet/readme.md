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
