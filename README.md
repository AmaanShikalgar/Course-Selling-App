# 🎓 CourseHub LMS

A backend REST API for a course-selling platform built with **Node.js, Express.js, MongoDB, and JWT Authentication**.

## Features

* User Registration & Login
* Admin Registration & Login
* Password hashing with bcrypt
* JWT-based authentication
* Role-based authorization using middleware
* Admin course creation
* Admin course updates
* Admin course deletion
* View all available courses
* Purchase courses
* View purchased courses
* MongoDB database integration with Mongoose
* Request validation using Zod

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* Zod
* dotenv

## Project Structure

```
Course-Selling-App/
│
├── middleware/
│   ├── adminAuth.js
│   └── userAuth.js
│
├── routes/
│   ├── admin.js
│   ├── user.js
│   └── course.js
│
├── db.js
├── index.js
├── package.json
└── .env
```

## Installation

```bash
git clone https://github.com/AmaanShikalgar/Course-Selling-App.git
cd Course-Selling-App
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
JWT_USER_SECRET=your_user_secret
JWT_ADMIN_SECRET=your_admin_secret
```

Run the server:

```bash
node index.js
```

## API Endpoints

### User

* POST `/user/signup`
* POST `/user/signin`

### Admin

* POST `/admin/signup`
* POST `/admin/signin`
* POST `/admin/course`
* PUT `/admin/course`
* DELETE `/admin/course`
* GET `/admin/course/bulk`

### Courses

* GET `/course/preview`
* POST `/course/purchase`
* GET `/course/purchases`

## Authentication

Protected routes require:

```
Headers:
token: <JWT_TOKEN>
```

## Future Improvements

* Course thumbnails upload
* Pagination
* Admin dashboard
* Payment gateway integration
* React frontend

---

Built by **Amaan Shikalgar**
