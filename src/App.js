import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [reminderMsg, setReminderMsg] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reminderList, setReminderList] = useState([]);

  const addReminder = () => {
    const remindAt = new Date(`${date} ${time}`);
    axios
      .post("http://localhost:9000/addReminder", { reminderMsg, remindAt })
      .then((res) => setReminderList(res.data));
    setReminderMsg("");
    setDate("");
    setTime("");
  };

  const deleteReminder = (id) => {
    axios.post("http://localhost:9000/deleteReminder", { id }).then((res) => setReminderList(res.data));
  };

  return (
    <div className="App">
      <div className="homepage">
        <h1>Remind Me 🙋‍♂️</h1>
        <div className="form-container">
          <input
            type="text"
            placeholder="Reminder notes here..."
            value={reminderMsg}
            onChange={(e) => setReminderMsg(e.target.value)}
          />
          <div className="datetime-container">
            <div className="date-container">
              <label>Date:</label>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="time-container">
              <label>Time:</label>
              <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
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
                Remind Me at: {new Date(reminder.remindAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
              </p>
              <button className="delete-button" onClick={() => deleteReminder(reminder._id)}>
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
