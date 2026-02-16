# User Management CRUD Application

This is a full-stack CRUD (Create, Read, Update, Delete) application built using React, Redux Toolkit, Tailwind CSS, Node.js, Express, and MongoDB.

The application is designed with extensibility in mind using a configuration-driven form architecture.

---

## Setup Instructions

### Backend

1. Navigate to the Backend folder:
   cd Backend

2. Install dependencies:
   npm install

3. Create a .env file inside the Backend folder:

   PORT=5000
   MONGO_URI=your_mongodb_connection_string

4. Start the server:
   npm run dev

Backend runs on:
http://localhost:5000

---

### Frontend

1. Navigate to the Frontend folder:
   cd Frontend

2. Install dependencies:
   npm install

3. Start the development server:
   npm run dev

Frontend runs on:
http://localhost:5173

---

## Extensibility – Adding New Fields

The form is dynamically generated from:

Frontend/src/config/userForm.schema.js

To add a new field (e.g., Date of Birth):

Add a new object inside the schema:

{
  name: "dob",
  label: "Date of Birth",
  type: "date",
  required: false
}

No changes are required in:
- Form component
- Table component
- Redux logic
- API integration

The UI updates automatically.

If strict validation is used in the backend, the field should also be added to the Mongoose model.

---

## Assumptions

- MongoDB is running locally or via MongoDB Atlas.
- Backend runs on port 5000.
- Frontend runs on the default Vite port.
- API follows REST structure defined in the backend routes.

---

## Design Decisions

- Redux Toolkit used for scalable async state management.
- Tailwind CSS used for responsive production-ready UI.
- Schema-driven form rendering for easy extensibility.
- Separation of frontend and backend for clean architecture.
