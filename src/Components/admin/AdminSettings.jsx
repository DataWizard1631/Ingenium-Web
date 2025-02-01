import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "./Button";
import Loader from "./Loader"; // Import Loader component

function AdminSettings() {
  const [admins, setAdmins] = useState([]);
  const [newAdminEmail, setNewAdminEmail] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // Track error messages

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/admin");
      setAdmins(response.data.data);
    } catch (error) {
      console.error("Error fetching admins:", error);
      setError("Failed to fetch admin list.");
    }
  };

  const handleAddAdmin = async () => {
    if (!newAdminEmail) {
      setError("Please enter a valid email.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      await axios.post("http://localhost:4000/api/v1/admin", {
        email: newAdminEmail,
      });
      setNewAdminEmail("");
      fetchAdmins();
      setIsAddModalOpen(false);
    } catch (error) {
      console.error("Error adding admin:", error);
      setError(error.response?.data?.message || "Failed to add admin.");
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveAdmin = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await axios.delete(`http://localhost:4000/api/v1/admin/${id}`);
      fetchAdmins();
    } catch (error) {
      console.error("Error removing admin:", error);
      setError(error.response?.data?.message || "Failed to remove admin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 text-white pt-20 pl-24 relative">
      <h1 className="text-5xl mb-4 font-primaryFont">Manage Admins</h1>
      <div>
        <Button text="Add an Admin" onClick={() => setIsAddModalOpen(true)} />
      </div>

      {/* Full-screen Loader when adding/removing an admin */}
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50">
          <Loader />
        </div>
      )}

      {/* Error Message Notification */}
      {error && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          {error}
        </div>
      )}

      {isAddModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-2xl font-primaryFont text-white mb-4">
              Add an Admin
            </h2>
            <input
              type="email"
              placeholder="Email"
              value={newAdminEmail}
              onChange={(e) => setNewAdminEmail(e.target.value)}
              className="p-2 rounded-lg text-black"
            />
            {error && <p className="text-red-400 mt-2">{error}</p>}
            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={() => {
                  setIsAddModalOpen(false);
                  setError(null);
                }}
                className="px-4 py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={handleAddAdmin}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500"
                disabled={loading}
              >
                Add Admin
              </button>
            </div>
          </div>
        </div>
      )}

      <ul className="mt-4 flex flex-col gap-4">
        {admins.map((admin,index) => (
          <li key={admin._id} className="flex justify-between items-center font-secFont2 text-2xl">
            <span>{index+1}.{" "}{admin.email}</span>
            <button
              onClick={() => handleRemoveAdmin(admin._id)}
              className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-800"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminSettings;
