# Login System with Express, JWT, and Nodemon

A simple login system built using **Express** for the backend, **JSON Web Tokens (JWT)** for secure authentication, and **Nodemon** for easy development workflow. This project demonstrates user registration, login, and access to protected routes with token-based authentication.

## Table of Contents

- [Description](#description)
- [Technologies](#technologies)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)

## Description

This project is designed to implement a secure user login system where users can register and log in. Upon successful login, they receive a JWT which they can use to access protected routes. Nodemon helps during development by automatically restarting the server on file changes.

## Technologies

- **Node.js** - JavaScript runtime environment.
- **Express.js** - Fast, unopinionated, minimalist web framework for Node.js.
- **JWT (Json Web Token)** - For managing user authentication securely.
- **bcrypt.js** - Library to hash passwords.
- **Nodemon** - Automatically restarts the server on changes.
- **dotenv** - For environment variable management.

## Prerequisites

To run this project locally, you will need:

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/) (installed with Node.js)
  
## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/repository-name.git

2. Navigate to the project directory:
  ```
  cd repository-name
  ```
3. Install the dependencies:

  ```
  npm install
  ```
4. Set up environment variables by creating a .env file in the root of the project and add the following variables:
  ```
  PORT=3000
  JWT_SECRET=your_secret_key
  ```
5. Start the application in development mode:

  ```
  npm run dev
  ```
The server will start on http://localhost:3000.

## Usage
Once the server is running, you can interact with the system through a tool like Postman or curl.

1. Register a new user by sending a POST request to /register.
2. Login with the registered user by sending a POST request to /login and receive a JWT token.
3. Use the JWT token to access protected routes.

## Routes
**User Registration**
>URL: /register
>Method: POST
>Description: Registers a new user.
>Request Body:
>username: A string representing the username.
>password: A string representing the password (hashed before saving).

**User Login**
>URL: /login
>Method: POST
>Description: Logs in a user and returns a JWT token.
>Request Body:
>username: A string representing the username.
>password: A string representing the password.
