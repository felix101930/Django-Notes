# Django-Notes

A note-taking application built with Django and React utilizing PosgreSQL

## Table of Contents

- [Overview](#overview)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
## Overview

This project is a note-taking application featuring a Django backend and a React frontend. It allows users to create, view, and delete notes using a simple, intuitive interface.

## Backend Setup

Follow these steps to set up the Django backend:

### 1. Create a Virtual Environment and Activate It

```bash
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
```
### 2. Install the Required Packages

```bash
pip install -r requirements.txt
```

### 3. Apply Migrations

```bash
python manage.py migrate
```

### 4. Run the Server

```bash
python manage.py runserver
```

## Frontend Setup

Follow these steps to set up the React frontend:
### 1. Navigate to the Frontend Directory

```
cd Django_Notes/frontend
```

### 2. Install the Dependencies
```
npm install
```

### 3. Start the React Application
```
npm start
```
## Usage

Once both the backend server and the frontend application are running, open your browser and navigate to http://localhost:3000 to access the application. From there, you can:

    Create a new note
    View existing notes
    Delete notes


## API Endpoints

The following API endpoints are available:

    GET /api/notes/
    Retrieve all notes.

    POST /api/notes/
    Create a new note.

    DELETE /api/notes/delete/<id>/
    Delete a note by its ID.
