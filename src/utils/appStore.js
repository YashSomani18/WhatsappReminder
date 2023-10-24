
import { configureStore } from '@reduxjs/toolkit';
import reminderReducer from '../utils/reminderSlice';

const appStore = configureStore({
  reducer: {
    reminder: reminderReducer,
  },
});

export default appStore;
