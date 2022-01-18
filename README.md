# Getting Started with Simple Web API with Node Js

## Available Scripts

First of All , you need to run the **patch file** (database.sql) from **main** branch to install the database for testing.

In the project directory, you can browse the directory and run:

### `node server.js`


Then, you may use postman to test below routes:
GET
http://localhost:8080/api/tasks

GET By ID
http://localhost:8080/api/tasks

POST (Saving)
http://localhost:8080/api/tasks/1

DELETE
http://localhost:8080/api/tasks/1


The Body Object for testing
[
    {
        "Title": "aaa",
        "Description": "aaa",
        "Status": "New"
    }
]
