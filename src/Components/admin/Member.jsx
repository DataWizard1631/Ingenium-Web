import React, { useState, useEffect } from "react";
import axios from "axios";
import { Plus, X, Edit, Trash } from "lucide-react";
import Button from "./Button";
import Loader from "./Loader";

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
    setLoading(true);
    try {
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
    let filtered = [...members];

    if (searchQuery) {
      filtered = filtered.filter(
        (member) =>
          member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          member.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

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
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/aboutus",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      if (response.data && response.data.data) {
        setMembers((prev) => [...prev, response.data.data]);
      } else {
        throw new Error("Invalid response from server");
      }

      setIsAddModalOpen(false);
      setNewMember({
        name: "",
        email: "",
        enrollment: "",
        department: "",
        image: null,
      });
      setImagePreview(null);
    } catch (err) {
      setError("Failed to add member");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateMember = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", newMember.name);
    formData.append("email", newMember.email);
    formData.append("enrollment", newMember.enrollment);
    formData.append("department", newMember.department);

    if (newMember.image) {
      formData.append("image", newMember.image);
    }
    setLoading(true);
    try {
      const response = await axios.put(
        `http://localhost:4000/api/v1/aboutus/${currentMember._id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      if (response.data && response.data.data) {
        setMembers((prev) =>
          prev.map((member) =>
            member._id === currentMember._id ? response.data.data : member
          )
        );
      } else {
        throw new Error("Invalid response from server");
      }

      setIsUpdateModalOpen(false);
      setNewMember({
        name: "",
        email: "",
        enrollment: "",
        department: "",
        image: null,
      });
      setImagePreview(null);
    } catch (err) {
      setError("Failed to update member: " + err.message);
    } finally {
      setLoading(false);
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
    setLoading(true);
    try {
      await axios.delete(`http://localhost:4000/api/v1/aboutus/${id}`);
      setMembers((prev) => prev.filter((member) => member._id !== id));
    } catch (err) {
      setError("Failed to delete member");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 mt-10">
      {/* Add Member Button */}
      <p className="text-6xl text-fuchsia-50 font-primaryFont sm:text-5xl md:text-4xl">
        MANAGE MEMBERS
      </p>
      <Button text="Add a member" onClick={() => setIsAddModalOpen(true)} />
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50">
          <Loader />
        </div>
      )}
      {/* Sort and Search Filters */}
      <div className="mb-4 flex flex-col sm:flex-row justify-between items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by Name or Email"
          className="px-4 py-2 rounded-lg bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-500 w-full sm:w-1/2 md:w-1/3"
        />

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 rounded-lg bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-500 mt-4 sm:mt-0"
        >
          <option value="department">Sort by Department</option>
          <option value="alphabetically">Sort Alphabetically</option>
        </select>
      </div>

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
                className="w-full h-48 object-cover"
              />
              <div className="p-4 font-secFont2">
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
                      setNewMember({
                        name: member.name,
                        email: member.email,
                        enrollment: member.enrollment,
                        department: member.department,
                        image: member.image,
                      });
                      setImagePreview(member.image);
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
