import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addReminderMessage, checkReminder } from "../utils/reminderSlice";

const phoneNumberRegex = /^\d{10}$/;
const isLocal = process.env.NODE_ENV === "development";
const baseURL = isLocal
  ? "http://localhost:9000"
  : "https://whatsappreminderbackend.onrender.com";

const ReminderForm = () => {
  const dispatch = useDispatch();
  const [reminderMsg, setReminderMsg] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const setReminderList = (data) => {
    if (Array.isArray(data)) {
      data.forEach(reminder => {
        dispatch(addReminderMessage(reminder));
      });
    } else {
      dispatch(addReminderMessage(data));
    }
    dispatch(checkReminder());
  };
  
  const addReminder = () => {
    if (!phoneNumberRegex.test(phoneNumber)) {
      setError("Invalid Phone Number");
      return;
    }
    const remindAt = new Date(`${date} ${time}`);
    axios
      .post(`${baseURL}/addReminder`, {
        phoneNumber,
        reminderMsg,
        remindAt,
      })
      .then((res) => setReminderList(res.data))
      .catch((error) => {
        // Handle the error as you see fit, for example:
        setError("Failed to add reminder");
        console.error("Error adding reminder:", error);
      });
    setPhoneNumber("");
    setReminderMsg("");
    setDate("");
    setTime("");
  };

  const handlePhoneNumberChange = (e) => {
    const { value } = e.target;
    setPhoneNumber(value);
    setError("");
  };

  return (
    <div className="flex flex-col items-center mb-10 p-4 m-4 bg-gray-800 rounded-lg shadow-lg w-96">
       <h1 className="text-3xl mb-10 text-center text-white">Remind Me 🙋‍♂️</h1>
      <input
        className="w-full p-4 mb-4 rounded-lg border border-gray-300 text-black"
        type="text"
        placeholder="Phone number"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
      {error && <p className="text-red-500">{error}</p>}
      <input
        className="text-black w-full p-4 mb-4 rounded-lg border border-gray-300"
        type="text"
        placeholder="Reminder notes here..."
        value={reminderMsg}
        onChange={(e) => setReminderMsg(e.target.value)}
      />
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col pr-2">
          <label className="text-gray-400 ">Date:</label>
          <input
            className=" text-black p-3 rounded-lg border border-gray-300"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-400">Time:</label>
          <input
            className="text-black p-3 rounded-md border border-gray-300"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
      </div>
      <button
        className=" px-4 py-2 bg-blue-500 text-white rounded-md"
        onClick={addReminder}
      >
        Add Reminder
      </button>
    </div>
  );
};

export default ReminderForm;
