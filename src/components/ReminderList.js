// ReminderList.js
import React from "react";
import { useSelector } from "react-redux";
import ReminderCard from "./ReminderCard"; // adjust the import path as per your project structure

function ReminderList() {
  const reminderList = useSelector((store) => store.reminder.Reminders);
  // console.log(reminderList);

  return (
<div className="flex flex-nowrap gap-4 overflow-x-auto ml-4">
      {reminderList?.map((reminder) => (
        <ReminderCard reminder={reminder} key={reminder._id} />
      ))}
    </div>
  );
}

export default ReminderList;
