# CRUD App Documentation

## Introduction

This documentation provides an overview of the CRUD (Create, Read, Update, Delete) app developed using React, Redux, and other technologies. The app allows users to perform various operations on posts, such as adding, editing, and deleting posts, as well as viewing post details and utilizing smart search functionality.

## Usage
Live: https://crud-app-abohmaid.onrender.com

- **For Quik Access Login With:**
  - Email: test@test.com
  - Password: Test1234$

## Technologies Used

The following technologies and libraries were used in the development of this app:

- React
- Redux
- React Router v6
- Tailwind CSS
- Formik
- JSON Server
- React Toastify
- React Icons

## Features

The CRUD app includes the following features:

- **Add post:** Users can add new posts.
  
- **Edit post:** Users can edit existing posts.
  
- **Delete post:** Users can delete posts.
  
- **Go to post details:** Users can view the details of a specific post.
  
- **Smart Search functionality:** Allows users to search for posts based on specific criteria.
  
- **Login & Signup:** Implements user authentication and registration functionality.
  
- **Form handling with Formik:** Utilizes the Formik library for form validation and handling.
  
- **Fake API with JSON Server:** Utilizes JSON Server to simulate a backend API and hosts it on a render site.
  
- **Error handling for form fields:** Provides error handling for empty fields or fields with excessively long titles during form submission.
  
- **Error handling for signup:**
  - Checks that names are at least one character long.
    
  - Validates email format using the pattern example@example.com.
    
  - Ensures passwords are at least 8 characters long and contain a combination of uppercase letters, lowercase letters, digits, and special characters.
    
  - Prevents duplicate registrations by checking if the user or email already exists during signup.
    
- **Error handling for sign-in:**
  - Redirects users to an error page with React Router v6 if they are already logged in and attempt to access the login page again.
    
  - Verifies if the email exists.
    
  - Validates the correctness of the password.

## Higher-Order Function (HOF) - withGuard

The `withGuard` higher-order function is used to check whether a user is logged in or not before granting access to certain features. This function ensures that only logged-in users can add, edit, and delete posts.
<br><br>
Also, users can only edit and delete their own posts. This feature ensures that users have control over their own posts and cannot modify or delete posts created by other users.

## User Authentication and Persistence

User authentication and persistence are implemented in the app. User data, including their name and email, is saved in the local storage to keep them signed in across sessions.

## Performance Optimization

The project incorporates performance optimization techniques to ensure efficient and smooth operation.

## Code Organization and Structure

The code is structured following clean code practices. The project follows a specific architecture pattern, ensuring organized and maintainable code.

## Custom Hook - use-post-details

The `use-post-details` custom hook is created to avoid code repetition. It is used in multiple places within the app to handle post details efficiently.

## Bugs and Issue Reporting

If you encounter any bugs or issues while using the app, please report them by creating a GitHub issue in the project's repository. Include detailed information about the problem and any relevant error messages.

## Resources
- [Kimz Code Channel](https://www.youtube.com/@kimzcodes)
- [Formik](https://formik.org/)
- [Yup](https://github.com/jquense/yup)
- [Render](https://render.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Toastify](https://www.npmjs.com/package/react-toastify)
