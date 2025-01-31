import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const EventsManager = () => {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    category: '',
    image: '',
    meetingType: 'online',
    registrationPeriod: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    // Fetch events from API
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/v1/events');
      const data = await response.json();
      setEvents(data.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isEditing 
        ? `http://localhost:8000/api/v1/events/${editingId}`
        : 'http://localhost:8000/api/v1/events';
      
      const method = isEditing ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        fetchEvents();
        resetForm();
      }
    } catch (error) {
      console.error('Error saving event:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8000/api/v1/events/${id}`, {
        method: 'DELETE',
      });
      fetchEvents();
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const handleEdit = (event) => {
    setFormData(event);
    setIsEditing(true);
    setEditingId(event._id);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      date: '',
      time: '',
      category: '',
      image: '',
      meetingType: 'online',
      registrationPeriod: ''
    });
    setIsEditing(false);
    setEditingId(null);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Manage Events</h2>

      {/* Event Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Category</option>
              <option value="esports">E-Sports</option>
              <option value="csevents">CS Events</option>
              <option value="mechevents">Mech Events</option>
              <option value="eeeevents">EEE Events</option>
              <option value="chemevents">Chem Events</option>
              <option value="concert">Concert</option>
            </select>
          </div>

          {/* Add other form fields */}
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="bg-colPink text-white px-6 py-2 rounded hover:bg-pink-700"
          >
            {isEditing ? 'Update Event' : 'Add Event'}
          </button>
          {isEditing && (
            <button
              type="button"
              onClick={resetForm}
              className="ml-4 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Events List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <motion.div
            key={event._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-4 rounded-lg shadow"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
            <p className="text-gray-600 mb-4">{event.description}</p>
            <div className="flex justify-between">
              <button
                onClick={() => handleEdit(event)}
                className="text-blue-600 hover:text-blue-800"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(event._id)}
                className="text-red-600 hover:text-red-800"
              >
                Delete
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EventsManager; 