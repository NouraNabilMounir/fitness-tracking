import React, { useState } from 'react';
import { getWorkouts } from '../utils/localStorageHelper';
import { PencilSquareIcon, TrashIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const ProgressDashboard = () => {
  const [workouts, setWorkouts] = useState(getWorkouts());

  const handleDelete = (index) => {
    const updatedWorkouts = workouts.filter((_, i) => i !== index);
    setWorkouts(updatedWorkouts);
    localStorage.setItem('workouts', JSON.stringify(updatedWorkouts));
  };

  const handleComplete = (index) => {
    const updatedWorkouts = workouts.map((workout, i) =>
      i === index ? { ...workout, completed: !workout.completed } : workout
    );
    setWorkouts(updatedWorkouts);
    localStorage.setItem('workouts', JSON.stringify(updatedWorkouts));
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">Progress Dashboard</h1>
      <div className="space-y-4">
        {workouts.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {workouts.map((workout, index) => (
              <li key={index} className={`p-4 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition ${workout.completed ? 'bg-green-100' : ''}`}>
                <div className="flex justify-between items-center">
                  <div className="flex-1">
                    <p><strong className="text-gray-700">Exercise:</strong> {workout.exerciseType}</p>
                    <p><strong className="text-gray-700">Duration:</strong> {workout.duration} minutes</p>
                    <p><strong className="text-gray-700">Calories:</strong> {workout.calories}</p>
                  </div>
                  <div className="ml-4 flex items-center space-x-2">
                    <button onClick={() => handleComplete(index)} className="text-green-600 hover:text-green-800 transition">
                      <CheckCircleIcon className="w-6 h-6" />
                    </button>
                    <button className="text-blue-600 hover:text-blue-800 transition">
                      <PencilSquareIcon className="w-6 h-6" />
                    </button>
                    <button onClick={() => handleDelete(index)} className="text-red-600 hover:text-red-800 transition">
                      <TrashIcon className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700">No workouts logged yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProgressDashboard;
