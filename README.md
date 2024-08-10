<h2>Overview</h2>

This project is a User Management System built using NestJS, MongoDB, and Redis. It provides endpoints for user registration, login, token refresh, and user updates. It also incorporates background job processing for user deletion using Bull and Redis.


<h2>Features</h2>
User Registration: Allows users to register with a name, email, and password.
User Login: Provides JWT tokens for user authentication.
Token Refresh: Refreshes access tokens using a refresh token.
User Management: Update user details and delete user accounts.
Background Processing: Uses Bull for handling background jobs, specifically for user deletion.

<h2>Technologies Used</h2>


<b>NestJS:</b> A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
MongoDB: A NoSQL database used for storing user data and refresh tokens.
Redis: An in-memory data structure store used for job queue processing.
Bull: A queue system for handling background jobs.
JWT: JSON Web Tokens for secure user authentication.


##Installation
Prerequisites
Node.js (v18 or later)
MongoDB
Redis
