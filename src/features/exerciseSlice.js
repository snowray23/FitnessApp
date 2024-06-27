import { createSlice } from '@reduxjs/toolkit';

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState: [],
  reducers: {
    addExercise: (state, action) => {
      state.push(action.payload);
    },
    deleteExercise: (state, action) => {
      return state.filter((exercise, index) => index !== action.payload);
    },
  },
});

export const { addExercise, deleteExercise } = exercisesSlice.actions;

export default exercisesSlice.reducer;