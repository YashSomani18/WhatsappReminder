import React from "react";
import ReminderList from "./ReminderList";
import ReminderForm from "./ReminderForm";

// HomePage.js
function HomePage() {
  return (
    <div className=" bg-gray-800 rounded-xl flex flex-col items-center justify-center m-10  p-10">
      <div className= "p-5 shadow-md flex flex-col items-center justify-center">
        <ReminderForm />
      </div>
      <div className="pt-4 overflow-auto">
      <ReminderList />
      </div>
    </div>
  );
}

export default HomePage;
