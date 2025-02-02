import React, { useState } from "react";
import { Home, Users, Calendar, FileText, Settings, LogOut, Menu, X } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader.jsx";  // Assuming you have a Loader component

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
  activeSection,
  setActiveSection,
}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Define the sidebar items
  const sidebarItems = [
    { icon: Users, label: "Members", id: "members" },
    { icon: Calendar, label: "Events", id: "events" },
    { icon: FileText, label: "Forms", id: "forms" },
    { icon: Settings, label: "Admin Settings", id: "settings" },
  ];

  // Logout handler
  const handleLogout = async () => {
    setLoading(true);
    try {
      // Send logout request to backend
      const token=localStorage.getItem("adminToken");
      const response = await axios.get("http://localhost:4000/api/v1/admin/logout", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true, // Ensure the request includes cookies
      });
      console.log("Logout Response:", response.data);

      // Clear the token from localStorage
      localStorage.removeItem("adminToken");

      // Navigate to the login page
      navigate("/admin-login");
    } catch (error) {
      console.error("Logout error:", error);
      alert("Error logging out. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <aside
      className={`${
        sidebarOpen ? "w-64" : "w-20"
      } bg-gray-800 h-screen fixed left-0 top-0 transition-all duration-300 ease-in-out z-30`}
    >
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50">
          <Loader />
        </div>
      )}

      <div className="p-4 flex justify-between items-center">
        {sidebarOpen && <h1 className="text-white text-xl font-bold">Admin</h1>}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <nav className="mt-8">
        {sidebarItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`w-full flex items-center ${
              sidebarOpen ? "px-6" : "px-4"
            } py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors ${
              activeSection === item.id ? "bg-gray-700 text-white" : ""
            }`}
          >
            <item.icon size={20} />
            {sidebarOpen && <span className="ml-4">{item.label}</span>}
          </button>
        ))}
      </nav>

      <button
        onClick={handleLogout}
        className="absolute bottom-4 w-full flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
      >
        <LogOut size={20} />
        {sidebarOpen && <span className="ml-4">Logout</span>}
      </button>
    </aside>
  );
};

export default Sidebar;
