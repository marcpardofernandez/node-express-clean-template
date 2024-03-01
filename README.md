# NodeJS/Express Clean Architecture

Repository with the template of a NodeJs/Express REST API implementing clean architecture.

## Table of Contents

- [Repository Structure](#repository-structure)
- [API Endpoints](#api-endpoints)
- [Installation](#installation)
- [Technology](#technology)
- [Developers](#developers)
- [License](#license)

## Repository Structure

The repository is organized as follows:

- **/dist**: Contains the transpiled .js files of the project.
- **/resources**: Contains non-source files, such as jsons or csv, from the project.
- **/src**: Contains the source code of the project.
- **/test**: Contains the code of the project tests.

## API Endpoints

### Information Endpoint

Returns general information about the server and session details.

- **URL:** `/`
- **Method:** `GET`
- **Responses:**
  - `200 OK`: General information about the server and session details.
  - `500 Internal Server Error`: An error occurred.

### Register Message Endpoint

Allows users to register a message associated with their session.

- **URL:** `/message`
- **Method:** `POST`
- **Request Body:**
  ```
  {
    "message": "Your message goes here"
  }
  ```
- **Responses:**
  - `200 OK`: Successful registration.
  - `500 Internal Server Error`: An error occurred.

### Get Messages Endpoint

Retrieves messages associated with the user's session.

- **URL:** `/messages`
- **Method:** `GET`
- **Query Parameters:**
  - `page` (optional): Page number for pagination. Default is 1.
  - `pageSize` (optional): Number of messages per page. Default is 3.
- **Responses:**
  - `200 OK`: Retrieved messages.
  - `500 Internal Server Error`: An error occurred.

### Error Handling

In case of any errors, the API will return an appropriate HTTP status code along with an error message.

## Installation

### Prerequisites

- Docker and Docker Compose.
- Git

### Steps

1. Clone this repository to your local machine:

```
git clone git@github.com:marcpardofernandez/node-express-clean-template.git
```

2. Navigate to the root directory of the project:

```
cd node-express-clean-template
```

3. Build and start the Docker containers using Docker Compose:

```
docker-compose up --build
```

4. After the containers are up and running, The application will be fired on `http://localhost:3000`.

5. To stop the application and shut down the Docker containers, run:

```
docker-compose down
```

6. If you also want to remove the volumes (e.g., to reset the database), use:

```
docker-compose down -v
```

7. To execute tests locally use:

```
npm run test
```

## Technology

### NodeJs

Node.js is a runtime environment that allows you to execute JavaScript code server-side. It's built on Chrome's V8 JavaScript engine and provides an event-driven architecture that makes it lightweight and efficient for building scalable network applications.

### Express

Express is a minimalist web application framework for Node.js. It provides a robust set of features for building web applications. With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.

### Typescript

TypeScript is a superset of JavaScript that adds static typing and other features to the language. It enables developers to write safer and more maintainable code by catching errors at compile-time rather than runtime.

### Brandi

Brandi is a dependency injection container powered by TypeScript.

### MongoDB

MongoDB is a popular NoSQL database that uses a document-oriented data model. It's designed to be scalable and flexible, making it well-suited for a wide range of applications.

### Mongoose

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straightforward, schema-based solution to model your application data. Mongoose's schema definition allows you to define the structure of your data, enforce validation, and build complex queries easily.

## Developers

- **Marc Pardo Fernández**

## License

This application is under the MIT License. See the LICENSE file for more info.
