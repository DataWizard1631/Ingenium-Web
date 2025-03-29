import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ShaftLogin from './components/ShaftLogin';
import ShaftDashboard from './components/ShaftDashboard';
import PitcherDashboard from './components/PitcherDashboard';
import ShaftLeaderboard from './components/ShaftLeaderboard';
import PitcherProfile from './components/PitcherProfile';
import InvestorProfile from './components/InvestorProfile';
import ProtectedRoute from './components/ProtectedRoute';

const ShaftTank = () => {
  return (
    <div className="min-h-screen pt-16 bg-black">
      <Routes>
        <Route path="login" element={<ShaftLogin />} />
        <Route element={<ProtectedRoute type="investor" />}>
          <Route path="dashboard" element={<ShaftDashboard />} />
          <Route path="investor/:id" element={<InvestorProfile />} />
          <Route path="pitcher/:id" element={<PitcherProfile />} />
        </Route>
        <Route element={<ProtectedRoute type="pitcher" />}>
          <Route path="pitcher-dashboard" element={<PitcherDashboard />} />
        </Route>
        <Route path="" element={<ShaftLeaderboard />} />
      </Routes>
    </div>
  );
};

export default ShaftTank; 