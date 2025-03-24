import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ShaftLogin from './components/ShaftLogin';
import ShaftDashboard from './components/ShaftDashboard';
import ShaftLeaderboard from './components/ShaftLeaderboard';
import PitcherProfile from './components/PitcherProfile';
import InvestorProfile from './components/InvestorProfile';
import ProtectedRoute from './components/ProtectedRoute';

const ShaftTank = () => {
  return (
    <div className="min-h-screen bg-black">
      <Routes>
        <Route path="login" element={<ShaftLogin />} />
        <Route element={<ProtectedRoute />}>
          <Route path="dashboard" element={<ShaftDashboard />} />
          <Route path="leaderboard" element={<ShaftLeaderboard />} />
          <Route path="pitcher/:id" element={<PitcherProfile />} />
          <Route path="investor/:id" element={<InvestorProfile />} />
        </Route>
      </Routes>
    </div>
  );
};

export default ShaftTank; 