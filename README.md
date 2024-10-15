Login System with Express, JWT, and Nodemon
A simple login system built using Express for the backend, JSON Web Tokens (JWT) for secure authentication, and Nodemon for easy development workflow. This project demonstrates user registration, login, and access to protected routes with token-based authentication.

Table of Contents
Description
Technologies
Prerequisites
Installation
Usage
Routes
Contributing
License
Description
This project is designed to implement a secure user login system where users can register and log in. Upon successful login, they receive a JWT which they can use to access protected routes. Nodemon helps during development by automatically restarting the server on file changes.

Technologies
Node.js - JavaScript runtime environment.
Express.js - Fast, unopinionated, minimalist web framework for Node.js.
JWT (Json Web Token) - For managing user authentication securely.
bcrypt.js - Library to hash passwords.
Nodemon - Automatically restarts the server on changes.
dotenv - For environment variable management.
Prerequisites
To run this project locally, you will need:

Node.js
NPM (installed with Node.js)
Installation
Clone the repository:

bash
Copiar código
git clone https://github.com/your-username/repository-name.git
Navigate to the project directory:

bash
Copiar código
cd repository-name
Install the dependencies:

bash
Copiar código
npm install
Set up environment variables by creating a .env file in the root of the project and add the following variables:

bash
Copiar código
PORT=3000
JWT_SECRET=your_secret_key
Start the application in development mode:

bash
Copiar código
npm run dev
The server will start on http://localhost:3000.

Usage
Once the server is running, you can interact with the system through a tool like Postman or curl.

Register a new user by sending a POST request to /register.
Login with the registered user by sending a POST request to /login and receive a JWT token.
Use the JWT token to access protected routes.
Routes
User Registration
URL: /register
Method: POST
Description: Registers a new user.
Request Body:
username: A string representing the username.
password: A string representing the password (hashed before saving).
User Login
URL: /login
Method: POST
Description: Logs in a user and returns a JWT token.
Request Body:
username: A string representing the username.
password: A string representing the password.
Protected Route
URL: /protected
Method: GET
Description: Access only for authenticated users.
Headers:
Authorization: Bearer <JWT_TOKEN>.
Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request if you find any bugs or have suggestions for improvements.

License
This project is licensed under the MIT License. See the LICENSE file for more details.
