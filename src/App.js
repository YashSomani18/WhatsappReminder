import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { FaSun, FaMoon } from "react-icons/fa";
const config = require("./config.js");

const phoneNumberRegex = /^\d{10}$/;

function App() {
  const [reminderMsg, setReminderMsg] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reminderList, setReminderList] = useState([]);
  const [theme, setTheme] = useState("dark-theme");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const addReminder = () => {
    if (!phoneNumberRegex.test(phoneNumber)) {
      setError("Invalid Phone Number");
      return;
    }
    const remindAt = new Date(`${date} ${time}`);
    axios
      .post(`${config.API_ENDPOINT}/addReminder`, {
        phoneNumber,
        reminderMsg,
        remindAt,
      })
      .then((res) => setReminderList(res.data));
    setPhoneNumber("");
    setReminderMsg("");
    setDate("");
    setTime("");
  };

  const deleteReminder = (id) => {
    axios
    .post(`${config.API_ENDPOINT}/deleteReminder`, { id })
    .then((res) => setReminderList(res.data));
  
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  const handlePhoneNumberChange = (e) => {
    const { value } = e.target;
    setPhoneNumber(value);
    setError("");
  };

  return (
    <div className={`App ${theme}`}>
      <header className="header">
        <div className="theme-toggle">
          <button
            className={`theme-button ${theme === "dark-theme" ? "active" : ""}`}
            onClick={() => handleThemeChange("dark-theme")}
          >
            <FaMoon />
          </button>
          <button
            className={`theme-button ${
              theme === "white-theme" ? "active" : ""
            }`}
            onClick={() => handleThemeChange("white-theme")}
          >
            <FaSun />
          </button>
        </div>
      </header>
      <div className="homepage">
        <h1>Remind Me 🙋‍♂️</h1>
        <div className="form-container">
          <input
            type="text"
            placeholder="Phone number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}{" "}
          
          <input
            type="text"
            placeholder="Reminder notes here..."
            value={reminderMsg}
            onChange={(e) => setReminderMsg(e.target.value)}
          />
          <div className="datetime-container">
            <div className="date-container">
              <label>Date:</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="time-container">
              <label>Time:</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>
          <button className="add-button" onClick={addReminder}>
            Add Reminder
          </button>
        </div>
        <div className="reminder-list">
          {reminderList.map((reminder) => (
            <div className="reminder-card" key={reminder._id}>
              <h2>{reminder.reminderMsg}</h2>
              <p className="reminder-time">
                Remind Me at:{" "}
                {new Date(reminder.remindAt).toLocaleString("en-IN", {
                  timeZone: "Asia/Kolkata",
                })}
              </p>
              <button
                className="delete-button"
                onClick={() => deleteReminder(reminder._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
