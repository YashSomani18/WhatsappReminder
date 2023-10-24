// reminderSlice.js
import { createSlice } from "@reduxjs/toolkit";

const ReminderSlice = createSlice({
  name: "reminder",
  initialState: {
    IsThereReminder: false,
    Reminders: [],
  },
  reducers: {
    addReminderMessage: (state, action) => {
      state.Reminders.unshift(action.payload);
    },
    removeReminder: (state, action) => {
      state.Reminders = state.Reminders.filter(
        reminder => reminder._id !== action.payload
      );
    },
    checkReminder: (state) => {
      state.IsThereReminder = state.Reminders.length > 0;
    }
  }
});

export const { addReminderMessage, removeReminder, checkReminder } = ReminderSlice.actions;
export default ReminderSlice.reducer;
