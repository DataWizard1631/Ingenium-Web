import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { FiHome, FiCalendar, FiUsers, FiDollarSign, FiLogOut } from 'react-icons/fi';

const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const navItems = [
    { path: '/admin', label: 'Dashboard', icon: FiHome },
    { path: '/admin/events', label: 'Events', icon: FiCalendar },
    { path: '/admin/sponsors', label: 'Sponsors', icon: FiDollarSign },
    { path: '/admin/users', label: 'Users', icon: FiUsers }
  ];

  const handleLogout = () => {
    // Add logout logic here
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4 border-b">
          <Link to="/admin" className="text-xl font-bold text-gray-800">
            Admin Dashboard
          </Link>
        </div>
        
        <nav className="p-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-4 py-2 rounded-lg mb-2 ${
                (location.pathname === item.path || 
                 (item.path === '/admin' && location.pathname === '/admin/')) ?
                'bg-colPink text-white' :
                'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <item.icon className="mr-3" />
              {item.label}
            </Link>
          ))}
          
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 mt-8 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            <FiLogOut className="mr-3" />
            Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout; 