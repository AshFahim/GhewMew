# Instructions for Creating Blog API Endpoints

## Put Request for Adding Data to the Table in JSON Format:

To add data to the `blogs` table using a PUT request with JSON format, follow these steps:

- Create a route in your API server to handle PUT requests at a specific endpoint, e.g., `/blogs`.
- Parse the incoming JSON data from the request body to extract `title`, `content`, `author`, and `created_at` fields.
- Validate the incoming data to ensure all required fields are present and have valid values.
- Execute an SQL query to insert the new blog entry into the `blogs` table, using the extracted data.
- Return an appropriate response indicating success or failure of the operation.

## Get Request for Pulling All Data from the Blogs Table:

To retrieve all data from the `blogs` table, follow these steps:

- Set up a route in your API server to handle GET requests at a specified endpoint, e.g., `/blogs`.
- Execute an SQL query to select all entries from the `blogs` table.
- Format the retrieved data as JSON.
- Return the JSON-formatted data in the response.

## Get Request for Pulling Data with the ID of a Blog:

To fetch data of a specific blog by its ID, follow these steps:

- Define a route in your API server to handle GET requests with the blog ID specified in the endpoint, e.g., `/blogs/{id}`.
- Extract the blog ID from the request parameters.
- Execute an SQL query to select the blog entry with the corresponding ID.
- Format the retrieved data as JSON.
- Return the JSON-formatted data in the response.

## Delete Request for Removing One Blog Entry with ID:

To delete a blog entry with a specific ID, follow these steps:

- Create a route in your API server to handle DELETE requests at a designated endpoint, e.g., `/blogs/{id}`.
- Extract the blog ID from the request parameters.
- Execute an SQL query to delete the blog entry with the specified ID from the `blogs` table.
- Return an appropriate response indicating success or failure of the deletion operation.

Ensure proper error handling and validation at each step to handle edge cases gracefully and securely. Additionally, consider implementing authentication and authorization mechanisms if necessary to secure the API endpoints.
