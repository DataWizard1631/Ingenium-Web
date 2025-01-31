import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Timeline from './Components/timeline/TimeLineComp';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Timeline />
      </div>
    </Router>
  );
}

export default App;