import React, { useState, useEffect } from "react";
import axios from "axios";
import { Plus, X, Edit, Trash } from "lucide-react";

export const MembersSection = () => {
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    enrollment: "",
    department: "",
    image: null,
  });
  const [currentMember, setCurrentMember] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("department");

  const fetchMembers = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:4000/api/v1/aboutus");
      if (response.data && response.data.data) {
        setMembers(response.data.data);
        setFilteredMembers(response.data.data);
      } else {
        throw new Error("Invalid response structure");
      }
    } catch (err) {
      setError("Failed to fetch members");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  useEffect(() => {
    // Apply search and sorting filters
    let filtered = [...members];

    // Search Filter
    if (searchQuery) {
      filtered = filtered.filter(
        (member) =>
          member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          member.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort Filter
    if (sortBy === "department") {
      filtered.sort((a, b) => a.department.localeCompare(b.department));
    } else if (sortBy === "alphabetically") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredMembers(filtered);
  }, [searchQuery, sortBy, members]);

  const handleAddMember = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", newMember.name);
    formData.append("email", newMember.email);
    formData.append("enrollment", newMember.enrollment);
    formData.append("department", newMember.department);
    formData.append("image", newMember.image);

    try {
      const response = await axios.post("http://localhost:4000/api/v1/aboutus", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (response.data && response.data.data) {
        setMembers((prev) => [...prev, response.data.data]);
      } else {
        throw new Error("Invalid response from server");
      }

      setIsAddModalOpen(false);
      setNewMember({ name: "", email: "", enrollment: "", department: "", image: null });
      setImagePreview(null);
    } catch (err) {
      setError("Failed to add member");
    }
  };

  const handleUpdateMember = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", newMember.name);
    formData.append("email", newMember.email);
    formData.append("enrollment", newMember.enrollment);
    formData.append("department", newMember.department);
    formData.append("image", newMember.image);

    try {
      const response = await axios.put(`http://localhost:4000/api/v1/aboutus/${currentMember._id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (response.data && response.data.data) {
        setMembers((prev) =>
          prev.map((member) => (member._id === currentMember._id ? response.data.data : member))
        );
      } else {
        throw new Error("Invalid response from server");
      }

      setIsUpdateModalOpen(false);
      setNewMember({ name: "", email: "", enrollment: "", department: "", image: null });
      setImagePreview(null);
    } catch (err) {
      setError("Failed to update member");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewMember({ ...newMember, image: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleDeleteMember = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/v1/aboutus/${id}`);
      setMembers((prev) => prev.filter((member) => member._id !== id));
    } catch (err) {
      setError("Failed to delete member");
    }
  };

  return (
    <div className="p-6">
      {/* Add Member Button */}
      <button
        onClick={() => setIsAddModalOpen(true)}
        className="px-4 py-2 mb-4 bg-green-600 text-white rounded-lg flex items-center gap-2 hover:bg-green-500"
      >
        <Plus size={18} /> Add Member
      </button>

      {/* Sort and Search Filters */}
      <div className="mb-4 flex justify-between items-center">
        {/* Search Input */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by Name or Email"
          className="px-4 py-2 rounded-lg bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-500 w-1/2 sm:w-1/3"
        />

        {/* Sort Dropdown */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 rounded-lg bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="department">Sort by Department</option>
          <option value="alphabetically">Sort Alphabetically</option>
        </select>
      </div>

      {/* Add Member Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-white">Add Member</h3>
              <button onClick={() => setIsAddModalOpen(false)} className="text-gray-400 hover:text-white">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleAddMember} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={newMember.name}
                onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={newMember.email}
                onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                placeholder="Enrollment No"
                value={newMember.enrollment}
                onChange={(e) => setNewMember({ ...newMember, enrollment: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                placeholder="Department"
                value={newMember.department}
                onChange={(e) => setNewMember({ ...newMember, department: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-500"
                required
              />
              {imagePreview && (
                <img src={imagePreview} alt="Preview" className="mt-2 w-full h-32 object-cover rounded-lg" />
              )}

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500"
                >
                  Add Member
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Members Grid */}
      {loading ? (
        <p className="text-white">Loading members...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
          {filteredMembers.map((member) => (
            <div
              key={member._id}
              className="bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={member.image}
                alt={member.name}
                crossOrigin="anonymous"
                className="w-fit mx-auto h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-400">{member.email}</p>
                <p className="text-gray-400">{member.enrollment}</p>
                <p className="text-gray-400">{member.department}</p>

                {/* Edit and Delete Buttons */}
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => {
                      setIsUpdateModalOpen(true);
                      setCurrentMember(member);
                    }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    onClick={() => handleDeleteMember(member._id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500"
                  >
                    <Trash size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="fixed bottom-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg">
          {error}
        </div>
      )}
    </div>
  );
};
