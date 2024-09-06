import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WorkoutLogging from './pages/WorkoutLogging';
import ProgressDashboard from './pages/ProgressDashboard';
import GoalSetting from './pages/GoalSetting';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<WorkoutLogging />} />
          <Route path="/progress" element={<ProgressDashboard />} />
          <Route path="/goals" element={<GoalSetting />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
