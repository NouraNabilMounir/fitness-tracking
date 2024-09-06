import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-teal-500 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-extrabold hover:text-blue-100">Fitness Tracker</Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-blue-200 transition">Log Workout</Link>
          <Link to="/progress" className="hover:text-blue-200 transition">Progress</Link>
          <Link to="/goals" className="hover:text-blue-200 transition">Goals</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
