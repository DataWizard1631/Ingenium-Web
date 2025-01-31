import React from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Outlet />
    </div>
  );
}

export default App;