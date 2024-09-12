# Cdac-web-assignment
**Overview:**
  This project features a login and registration form component built with React. It includes:
  - A login form with email and password fields.
  - A registration form with name, email, and password fields.
  - Password visibility toggle for both login and registration forms.
  - A switch panel to toggle between login and registration views.

**Setup and Installation**:
  1. npx create-react-app loginregister:
     Purpose: This command creates a new React project called loginregister using the official create-react-app tool.
  2. npm install axios:
     Purpose: Installs axios, a popular HTTP client for making API requests from the browser or Node.js.
  3. npm install react-router-dom
     Purpose: Installs react-router-dom, a library that enables routing in React applications.
  4. npm install bootstrap:
     Purpose:The command npm install bootstrap installs the Bootstrap library to provide pre-built, responsive CSS styles and components for web development.
  5. npm install @mui/material @emotion/react @emotion/styled:
     Purpose: Installs Material-UI (MUI) components along with @emotion/react and @emotion/styled for styling.
  6. npm install react-icons
     Purpose: Installs react-icons, specifically the FontAwesome icons (fa), to easily add icons to your React project.
**Note**:Once it's installed, you need to import the Bootstrap CSS into your React project. Open the src/index.js (or src/index.tsx if you're using TypeScript) file and add the following import statement at the top:
**import 'bootstrap/dist/css/bootstrap.min.css';**
This will load Bootstrap styles globally in your React app. You can now use Bootstrap classes in your components.


**Component Details:**

**LoginRegister Component**:
  The LoginRegister component handles user login and registration functionality.
  - Password Visibility: Toggle visibility for both login and registration passwords.
  - Form Submission: Sends API requests for login and registration.
  - Switch Panel: Allows users to switch between the login and registration forms.

**App Component**:
  The App component sets up routing for the application and renders the LoginRegister component.

**Styles**:
  The project uses custom styles for layout and responsiveness. Key CSS classes include:
  - .content: Container for the form, with background and border radius.
  - .switch-content: Handles the transition between login and registration forms.
  - Media queries adjust styles for small, medium, and large screens.

**API Endpoints**
  The current API endpoints are placeholders (https://jsonplaceholder.typicode.com/posts). Replace these with your actual API endpoints for login and registration.
