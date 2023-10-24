// ReminderCard.js
import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeReminder } from "../utils/reminderSlice"; // adjust the import path as per your project structure

const isLocal = process.env.NODE_ENV === "development";
const baseURL = isLocal
  ? "http://localhost:9000"
  : "https://whatsappreminderbackend.onrender.com";

function ReminderCard({ reminder }) {
  // console.log(reminder);
  const dispatch = useDispatch();

  const deleteReminder = (id) => {
    axios.post(`${baseURL}/deleteReminder`, { id }).then(() => {
      dispatch(removeReminder(id)); // dispatching the action to remove the reminder from the redux store
    });
  };

  return (
    <div className="reminder-card p-4 mr-4 max-w-[300px] bg-white rounded-lg shadow-md overflow-y-auto">
      <h2 className="text-xl mb-2 text-black">{reminder.reminderMsg}</h2>
      <p className=" mb-4 text-black">Phone Number: {reminder.phoneNumber}</p>
      <p className=" mb-4 text-black">
        Remind Me at:{" "}
        {new Date(reminder.remindAt).toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
        })}
      </p>
      <button
        className="delete-button px-4 py-2 bg-red-500 text-white rounded-md"
        onClick={() => deleteReminder(reminder._id)}
      >
        Delete
      </button>
    </div>
  );
}

export default ReminderCard;
