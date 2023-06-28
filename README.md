# todolistback
# Node, Express, TypeScript, MySQL

# Set up & run Instructions

Prerequisites:

    Node.js and npm should be installed on your machine.
    MySQL database should be set up.

Installation:

    Clone the repository to your local machine.
    Open a terminal and navigate to the project directory.
    Run the following command to install the project dependencies:
# npm install 

Configuration:

    Create a .env file in the root folder of the project.
    Open the .env file and set the following environment variables:
DB_HOST=<your_database_host>
DB_PORT=<your_database_port>
DB_USER=<your_database_username>
DB_PASSWORD=<your_database_password>
DB_NAME=<your_database_name>

Database Setup:

    Open MySQL Workbench or any other MySQL database management tool.
    Create a new database with the name specified in the .env file (DB_NAME variable).
    Import the SQL schema provided in the project into the newly created database.

Transpile TypeScript:

    In the terminal, navigate to the project directory.
    Run the following command to transpile TypeScript into JavaScript:
# npx tsc 

Starting the Application:

    In the terminal, navigate to the dist directory of the project.
    Run the following command to start the application:
# node dist/index.js

# Postman collection 
see the file task API.postman_collection

# Task Description: 
Design and implement a RESTful API using Node.js and TypeScript for a simple ToDo list application. 
The following functionality is required:

Create a new Task:
Request Type: POST
Endpoint: '/tasks'
Request Body: JSON object with 'title' and 'description' (Both fields are string and required).
Response: Return the newly created task with a unique 'id', 'title', 'description', and 'status'. The 'status' is initially set to 'pending'.

Get all Tasks:
Request Type: GET
Endpoint: '/tasks'
Response: Return a list of all tasks, each task has 'id', 'title', 'description', and 'status'.
                          
Get a Task by id:
Request Type: GET
Endpoint: '/tasks/{id}'
Response: Return the task with the given 'id'.

Update a Task:
Request Type: PUT
Endpoint: '/tasks/{id}'
Request Body: JSON object with 'title', 'description', and/or 'status' (All fields are optional and can be partial).
Response: Return the updated task.

Delete a Task:
Request Type: DELETE
Endpoint: '/tasks/{id}'
Response: Return a success message if the task is deleted.

Bonus (If time permits):
Implement pagination for the 'Get all Tasks' API:
The API should support 'limit' and 'offset' query parameters.
'limit' is the number of tasks to return and 'offset' is the number of tasks to skip.
Default 'limit' to 10 and 'offset' to 0. 


Validate the Request Payload:
For 'Create a new Task' and 'Update a Task', validate the request payload to ensure 'title' and 'description' are non-empty strings.
For 'Update a Task', validate 'status' to ensure it's either 'pending' or 'completed'.

Deliverable:
Share the GitHub repository with the source code
A README file with instructions to setup and run the application
Postman collection to test the APIs. (can be uploaded to the repository)

Evaluation Criteria:
Code quality and organization.
Correct implementation of the task.
Use of TypeScript features.
Proper error handling and validation.
Bonus points for implementing pagination and payload validation.
