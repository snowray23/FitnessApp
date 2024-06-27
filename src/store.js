import { configureStore } from '@reduxjs/toolkit';
import exercisesReducer from './features/exerciseSlice'

const store = configureStore({
  reducer: {
    exercises: exercisesReducer,
  },
});

export default store;