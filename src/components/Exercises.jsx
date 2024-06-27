import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addExercise,deleteExercise } from '../features/exerciseSlice';

const Exercises = () => {
  const exercises = useSelector((state) => state.exercises);
  const dispatch = useDispatch();

  const [exercise, setExercise] = useState('');
  const [time, setTime] = useState('');
  
  const handleAddExercise = () => {
    if (exercise && time) {
      dispatch(addExercise({ exercise, duration: time }));
      setExercise('');
      setTime('');
    }
  };

  return (
    <div>
      <h2>Exercises</h2>
      <input
        type="text"
        placeholder="Exercise"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
      />
      <input
        type="text"
        placeholder="Duration (minutes)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button onClick={handleAddExercise}>Add Exercise</button>

      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>
            {exercise.exercise} - {exercise.duration} minutes
            <button onClick={() => dispatch(deleteExercise(index))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Exercises;