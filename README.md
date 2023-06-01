# WhatsappReminder

# Whatsapp Reminder App

This is a simple reminder application that allows users to add reminders with specific dates and times and sends them reminders via WhatsApp.

# Features

-Add reminders with phone numbers, reminder messages, and specific date and time.
-View a list of all reminders.
-Delete reminders from the list.
-Toggle between dark and white themes.
-Reminders are sent via WhatsApp using Twilio API.
-Reminders are scheduled to be sent at the specified date and time.

# Technologies Used

Frontend: React.js
Backend: Node.js with Express.js
Database: MongoDB
External Services: Twilio API (for sending WhatsApp messages)
Additional Libraries: axios, moment-timezone, mongoose, cors

# Getting Started

To run the Reminder App locally, follow these steps:

Prerequisites
Node.js and npm (Node Package Manager) should be installed on your machine.
MongoDB should be installed and running.

## Installation and Setup

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB account and connection URI.
- Twilio account, account SID, and auth token.

### Frontend

1. Clone the repository:

2. Navigate to the frontend directory:

3. Install dependencies:

4. Set up environment variables:
- Create a `.env` file in the frontend directory.
- Add the following variables to the `.env` file:
  ```
  REACT_APP_BACKEND_URL=http://localhost:9000
  ```

5. Start the development server:

6. Open your web browser and access the application at `http://localhost:3000`.

### Backend

1. Navigate to the backend directory:

2. Install dependencies:

3. Set up environment variables:
- Create a `.env` file in the backend directory.
- Add the following variables to the `.env` file:
  ```
  MONGODB_USERNAME=<your_mongodb_username>
  MONGODB_PASSWORD=<your_mongodb_password>
  TWILIO_ACCOUNT_SID=<your_twilio_account_sid>
  TWILIO_AUTH_TOKEN=<your_twilio_auth_token>
  ```

4. Start the backend server:

# Usage

1. Enter a valid 10-digit phone number and reminder details in the form inputs.
2. Select a date and time for the reminder.
3. Click the "Add Reminder" button to add the reminder.
4. The reminder will be displayed in the reminder list.
5. Reminders that have passed their scheduled date and time will be sent via WhatsApp, and then they will be automatically        deleted from the list.
6. To delete a reminder, click the "Delete" button next to the reminder in the list.
7. Use the theme toggle buttons in the header to switch between dark and white themes.

# API Endpoints

- GET /getAllReminder: Get all reminders.
- POST /addReminder: Add a new reminder.
- POST /deleteReminder: Delete a reminder.

# Notes

1. The reminder scheduling functionality uses the setInterval method to periodically check for reminders that need to be sent.    In a production environment, it is recommended to use a task scheduler or a message queue system for more reliable and        scalable scheduling.
2. The application assumes that the Twilio API credentials are valid and the phone numbers provided are registered on            WhatsApp.
4. The application uses the moment-timezone library to handle timezone conversion when saving the reminder and displaying the    reminder time.
5. The MongoDB connection string provided assumes a connection to MongoDB Atlas. If you are using a local MongoDB instance,   
   please update the connection string accordingly.

