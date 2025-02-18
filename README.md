# Numetry_Task23_LoginJWT

User Authentication System (React.js, Node.js, MySQL)

This project is a simple User Registration & Login System built using React.js (frontend) 
and Node.js with Express (backend), with MySQL as the database.

Features

✅ User Registration – Stores user details securely in MySQL (hashed passwords).
✅ User Login – Authenticates users using email & password.
✅ JWT Token Authentication – Stores the token in localStorage for session management.
✅ Dashboard – Displays a welcome message with user details after login.
✅ Logout – Clears session data and redirects to the login page.

Endpoints

Method	Endpoint	Description
POST	/register	Register a new user
POST	/login	Authenticate user
GET	/users	Fetch all users (admin)
