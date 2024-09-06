import React from 'react';

const Home = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">Welcome to Fitness Tracker</h1>
      <p className="text-gray-700 mb-4">Track your workouts, monitor your progress, and set fitness goals with ease.</p>
      <ul className="space-y-4">
        <li>
          <a href="/workout" className="block bg-blue-600 text-white p-4 rounded-lg text-center hover:bg-blue-700 transition">Log Workout</a>
        </li>
        <li>
          <a href="/progress" className="block bg-teal-600 text-white p-4 rounded-lg text-center hover:bg-teal-700 transition">Progress Dashboard</a>
        </li>
        <li>
          <a href="/goals" className="block bg-purple-600 text-white p-4 rounded-lg text-center hover:bg-purple-700 transition">Set Goals</a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
