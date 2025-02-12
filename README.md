# Online Group-Study Web Application
# Study Hive 



<div align="center">
  <img height="500"  src="https://i.ibb.co.com/gb6CbcZr/Fire-Shot-Capture-057-Home-Study-Hive-studyhive-eb8d9-web-app.png"  />
</div>


## Purpose

The Online Group-Study web application allows users to collaborate with their friends by creating assignments, completing them, and grading others' submissions. This platform encourages group study, where users can track their progress, submit assignments, and provide feedback to their peers.

## Live URL
[live Demo](https://studyhive-eb8d9.web.app/)

## Requirement
[Requirement Link](https://docs.google.com/document/d/1Zgho7XsSNRIdwLz20VtqSuN-zIQDw0mvRsCP-mnqCes/edit?tab=t.0)

## Key Features

- **User Authentication**: Secure email/password and social login (Google/GitHub).
- **Assignment Management**: Users can create, view, update, and delete assignments.
- **Submit Assignments**: Users can submit assignments with links and notes.
- **Grading System**: Users can grade their friends' assignments and provide feedback.
- **Private/Protected Routes**: Pages such as pending assignments and submitted assignments are accessible only after logging in.
- **Theme Toggle**: Switch between light and dark themes for a better user experience.
- **Responsiveness**: Fully responsive layout that adapts to desktop, tablet, and mobile devices.

## Technologies Used

- **Frontend**: React.js, Tailwind CSS, React Router, React-datepicker
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: Firebase Authentication (Email/Password, Google, GitHub)
- **JWT**: JSON Web Tokens for secure authentication
- **Database**: MongoDB
- **Hosting**: Firebase, Netlify, or Surge for frontend and backend
## Npm packages 
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase, JWT, bcryptjs
- **Utilities**: `dotenv`, `cors`
- **Frontend Utilities**:
  - `@tanstack/react-query`
  - `axios`
  - `localforage`
  - `lodash`
  - `lottie-react`
  - `match-sorter`
  - `react`
  - `react-datepicker`
  - `react-dom`
  - `react-helmet-async`
  - `react-icons`
  - `react-router-dom`
  - `react-tooltip`
  - `sort-by`
  - `sweetalert2`
  - `swiper`

## Features Breakdown

### User Authentication

- **Login**: Allows users to log in with email/password or social accounts like Google and GitHub.
- **Registration**: Users can register with their name, email, photo URL, and password.
- **Password Validation**: Ensures password includes at least one uppercase letter, one lowercase letter, and a minimum length of 6 characters.
- **Toast Notifications**: Success or error messages displayed upon registration or login.

### Assignment Management

- **Create Assignments**: Logged-in users can create assignments with a title, description, marks, difficulty level, and due date.
- **Update Assignments**: Users can update their own created assignments.
- **Delete Assignments**: Only the creator of an assignment can delete it. Confirmation modal is shown before deletion.
- **View Assignments**: Users can view assignment details and submit their answers.
- **Grading**: Graders can mark assignments and provide feedback. A status update occurs once graded.
- **Filter and Search**: Users can filter assignments by difficulty level and search for assignments.

### Private/Protected Routes

- **Pending Assignments**: Shows assignments that have been submitted but not yet graded.
- **My Submitted Assignments**: Displays all the assignments that the user has submitted.
- **Grade Assignments**: Only users who are not the submitter can grade the assignment.

### Theme Customization

- **Light/Dark Mode**: Users can toggle between light and dark themes to personalize their experience.

### Validation

- **Form Validation**: Ensures that all fields, including assignment creation and updates, are validated.
- **Search and Filter**: Implement search functionality for assignments based on title or difficulty, integrated with MongoDB queries.

### Security

- **Firebase Configuration**: Firebase keys are secured using environment variables.
- **MongoDB Credentials**: MongoDB credentials are stored securely in environment variables.
- **JWT Tokens**: JWT tokens are used for authentication in private routes, ensuring only authorized users can access certain pages.

## add .env for firebase config like 
  - apiKey: import.meta.env.VITE_apiKey,
  - authDomain: import.meta.env.VITE_authDomain,
  - projectId: import.meta.env.VITE_projectId,
  - storageBucket: import.meta.env.VITE_storageBucket,
  - messagingSenderId: import.meta.env.VITE_messagingSenderId,
  - appId: import.meta.env.VITE_appId,