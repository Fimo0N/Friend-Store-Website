# System Design Document

## 1. Introduction
- **Project Overview**: This document describes the design of a full-stack application developed to manage a friend list. Users can perform CRUD operations to add, view, edit, and delete friend entries.
- **Tech Stack**:
  - **Backend**: Python, Flask, SQLAlchemy, SQLite
  - **Frontend**: React, Chakra UI
  - **Deployment**: Render
- **Key Features**:
  - CRUD functionality
  - Responsive design for different screen sizes
  - Light/dark mode toggle
  - Best practices for clean code and isolated development environment

---

## 2. Overview
- **System Structure**: The application is split into a frontend (React) and backend (Flask). The frontend communicates with the backend via a RESTful API.
- **Primary Components**:
  - **Backend API**: Manages database operations and serves data.
  - **Frontend Interface**: Allows users to interact with the friend list and sends requests to the backend.
  - **Database**: SQLite database with SQLAlchemy ORM for data persistence.

---

## 3. Goal
- **Primary Objective**: Develop a simple, user-friendly application that enables users to manage a personal friend list with CRUD operations.
- **Secondary Objectives**: Ensure the application is responsive, easy to deploy, and offers a visually appealing UI with a dark mode option.

---

## 4. Context
- **User Base**: Targeted towards users who need a lightweight application to manage personal contacts or friends.
- **Problem Solved**: Provides a streamlined, easily deployable solution for managing friend lists without needing complex software.

---

## 5. Design
- **Frontend**: Built with React and styled using Chakra UI to speed up the design process. The UI is responsive and adapts to multiple screen sizes.
- **Backend**: Flask provides the RESTful API, handling CRUD requests and interacting with the SQLite database through SQLAlchemy ORM.
- **Data Flow**: User actions on the frontend trigger API requests to the backend, which then fetches or updates data in the database.

---

## 6. Database Design
- **Database**: SQLite, chosen for its simplicity and lightweight structure.
- **Tables**:
  - **Friends**:
    - `ID`: Integer, Primary Key, Auto-increment
    - `Name`: String, required
    - `Role`: String, optional (e.g., "Software Engineer")
    - `Description`: Text, optional
    - `Gender`: String, optional
    - `Image URL`: String, optional (dynamically generated if not provided)
- **ORM**: SQLAlchemy is used for database interaction, mapping Python classes to database tables.

---

## 7. Architectural Plan
- **Architecture**: Client-server model with a React frontend and Flask backend.
- **Components**:
  - **API Endpoints**: RESTful API with endpoints for each CRUD operation.
  - **Data Flow**: The frontend communicates with the backend API, which interacts with the SQLite database.
- **Deployment**: Deployed on Render with separate builds for the frontend and backend.

---

## 8. Functionality
- **Features**:
  - CRUD operations: Create, Read, Update, Delete friends in the friend list.
  - Dynamic Avatar Generation: An API generates unique avatars based on gender.
  - UI Theme: Users can toggle between light and dark modes.
  - Responsive Design: Adapts to various screen sizes (desktop, tablet, mobile).
- **UI/UX**: Implemented with Chakra UI for a modern and accessible design.

---

## 9. Testing Plan
- **Backend Tests**:
  - Unit tests for each API endpoint to ensure accurate CRUD operations.
  - Integration tests for the database to verify ORM functionality.
- **Frontend Tests**:
  - Component testing for individual React components.
  - End-to-end testing of the UI interactions using tools like Jest or Cypress.
- **Manual Testing**:
  - Ensure responsiveness across devices and check light/dark mode functionality.

---

## 10. TDD (Test-Driven Development)
- **Methodology**: Tests are written before implementing each feature, following the TDD approach.
- **Backend TDD**: For each API endpoint, a unit test is written to verify the expected output.
- **Frontend TDD**: Write tests for UI components and validate against expected behavior (e.g., modal opens correctly, data updates in real-time).

---

## 11. Current Situation
- **Development Status**: A working prototype deployed on Render.
- **Known Issues**: None currently, though scalability may be limited by SQLite in high-demand scenarios.
- **Future Enhancements**: Potential for additional features, such as enhanced search or categorization of friends.

---

## 12. Functional Design
- **Backend Functions**:
  - CRUD endpoints for managing the friend list.
  - Avatar generation function for dynamic image URLs.
- **Frontend Components**:
  - Input forms for CRUD operations.
  - Display components for friend details, with the option to switch themes.
  - Responsive layout adjustments based on screen size.

---

## 13. Maintenance Plan
- **Code Maintenance**:
  - Use virtual environments for dependency management and isolated development.
  - Regular updates to dependencies and frameworks as needed.
- **Deployment Maintenance**: Monitoring the Render deployment for uptime and performance.
- **Database Maintenance**: Scheduled database backups and potential migration to a more scalable database if usage increases.

---

## 14. Open Questions
- **Database Scalability**: Should the application be scaled up, consider switching to a more robust database like PostgreSQL.
- **Additional Features**: Potential for social features or integration with other applications.
- **User Authentication**: Currently no login system; may be added if privacy or multi-user access becomes a requirement.

---

## 15. User Case Diagram
- Diagram illustrating user interactions, such as:
  - Adding a friend
  - Viewing friend details
  - Editing friend information
  - Deleting a friend
- Diagram would show each user action and how it corresponds to a backend request.

---

## 16. Summary
- **Project Recap**: A CRUD-based friend management application, built with Python, React, and deployed on Render.
- **Key Features**: Light/dark mode, responsive design, CRUD functionality.
- **Future Considerations**: Expanding the feature set, scaling the database, and adding user authentication if needed.

