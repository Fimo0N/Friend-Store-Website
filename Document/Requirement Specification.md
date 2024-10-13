# Project Requirement Specification

## Project Name
Friend Store Website

## Purpose
To create a web application that manages friends through CRUD (Create, Read, Update, Delete) operations.

## Intended Audience
- End-users who need a responsive and functional interface for managing personal contacts.

## User Needs
- Simple and intuitive UI to manage friends.
- Light and dark mode options.
- Responsive design adaptable to different screen sizes.

## System Rules, Patterns, Recommendations
- Use virtual environments (venv) for development.
- Best practices in Python (Flask) and React.
- Use SQLite for database management with SQLAlchemy ORM.

## Current Business Flow Model
1. User logs in. (Optional)
2. User can add, edit, delete, or view friends from their list.
3. Data is persisted in SQLite.
4. UI adjusts for light/dark mode preferences.

## Project Outline
- Tech stack: Python, Flask (Backend), React (Frontend), Chakra UI (UI Framework), SQLite, SQLAlchemy.
- CRUD functionality for managing friends.
- Deployment on Render for free hosting.

## Current Situation
The project is currently in development with Flask (backend) and React (frontend). Chakra UI is being used for the design, supporting responsive layout and light/dark mode. SQLite is set up as the database, and SQLAlchemy is configured for ORM.

## Goal
To deploy the app, making it accessible and usable for a broader audience while maintaining scalability.

## Glossary
- **CRUD**: Create, Read, Update, Delete.
- **Flask**: Python micro web framework.
- **SQLAlchemy**: SQL toolkit for Python.

## Non-Functional Requirements
- Responsive design using Chakra UI.
- App must support both light and dark modes.
- The app should be deployed on Render with free hosting.
