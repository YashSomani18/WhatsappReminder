# WhatsappReminder

# WhatsApp Reminder App

WhatsApp Reminder App is a web application that allows users to schedule reminders and receive them as WhatsApp messages. It uses the Twilio API for sending messages and MongoDB for storing reminders.

## Features

- Schedule reminders with a specific date and time.
- Reminders are sent as WhatsApp messages using the Twilio API.
- Change the Theme of your choice
- View the list of scheduled reminders.
- Delete reminders when they are no longer needed.

## Technologies Used

### Frontend

- React.js: A JavaScript library for building user interfaces.
- Axios: A promise-based HTTP client for making API requests.
- react-icons: A library that provides icons for your React components.
- CSS: Styling the user interface.

### Backend

- Node.js: A JavaScript runtime for running JavaScript on the server.
- Express.js: A web application framework for building APIs.
- MongoDB: A NoSQL database for storing reminders.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB.
- Twilio API: A cloud communications platform for sending WhatsApp messages.

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

## Usage

1. Open the application in your web browser.
2. Enter the phone number, reminder message, date, and time.
3. You can change the theme according to your need either Light or Dark.
4. To get the reminder you first need to send "join roll-cost" to this whatsapp number "+14155238886"
5. Click the "Add Reminder" button to schedule the reminder.
6. The reminder will be saved in the database and sent as a WhatsApp message at the specified time.
7. View the list of scheduled reminders on the homepage.
8. To delete a reminder, click the "Delete" button next to the reminder.

