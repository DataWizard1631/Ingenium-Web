import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Navbar } from './Navbar';
import { MembersSection } from './Member'
import EventsManager from './EventsManager';
import { FormsSection } from './FormsSection';
import AdminSettings from './AdminSettings';
const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('members');

  return (
    <div className="min-h-screen bg-gray-900">
      <Sidebar 
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      
      <div className={`${sidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300`}>
        <Navbar />
        
        <main className="pt-20 p-6">
          <div className="bg-gray-800 rounded-lg shadow-lg">
            {activeSection === 'members' && <MembersSection />}
            {activeSection === 'events' && <EventsManager />}
            {activeSection === 'forms' && <FormsSection />}
            {activeSection === 'settings' && <AdminSettings />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;