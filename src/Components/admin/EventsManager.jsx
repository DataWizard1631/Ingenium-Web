import React, { useState, useEffect } from "react";
import axios from "axios";
import { Plus, X, Edit, Trash } from "lucide-react";
import Button from "./Button";

const EventsSection = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    category: "esports", // Default category value
    image: null,
    meetingType: "online", // Default meeting type
    registrationPeriod: "",
  });
  const [currentEvent, setCurrentEvent] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("date");

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:4000/api/v1/events");
      if (response.data && response.data.data) {
        setEvents(response.data.data);
        setFilteredEvents(response.data.data);
      } else {
        throw new Error("Invalid response structure");
      }
    } catch (err) {
      setError("Failed to fetch events");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    let filtered = [...events];

    // Search Filter
    if (searchQuery) {
      filtered = filtered.filter(
        (event) =>
          event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (sortBy === "date") {
      filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortBy === "alphabetically") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }
    setFilteredEvents(filtered);
  }, [searchQuery, sortBy, events]);

  const handleAddEvent = async (e) => {
    e.preventDefault();
    // console.log("New Event Data:", newEvent);
    const formData = new FormData();
    formData.append("title", newEvent.title);
    formData.append("description", newEvent.description);
    formData.append("date", newEvent.date);
    formData.append("time", newEvent.time);
    formData.append("category", newEvent.category);
    formData.append("meetingType", newEvent.meetingType);
    formData.append("registrationPeriod", newEvent.registrationPeriod);

    if (newEvent.image) {
      formData.append("image", newEvent.image);
    }

    formData.forEach((value, key) => {
      console.log(`${key}:`, value);
    });

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/events",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log("Response", response); // Debugging: Log the response from the server
      if (response.data && response.data) {
        setEvents((prev) => [...prev, response.data.data]);
      } else {
        throw new Error("Invalid response from server");
      }

      // Reset the form and close the modal
      setIsAddModalOpen(false);
      setNewEvent({
        title: "",
        description: "",
        date: "",
        time: "",
        category: "esports",
        image: null,
        meetingType: "online",
        registrationPeriod: "",
      });
      setImagePreview(null);
    } catch (err) {
      setError("Failed to add event: " + err.message);
    }
  };

  const handleUpdateEvent = async (e) => {
    e.preventDefault();
    const formData = new FormData();
  
    formData.append("title", newEvent.title);
    formData.append("description", newEvent.description);
    formData.append("date", newEvent.date);
    formData.append("time", newEvent.time);
    formData.append("category", newEvent.category);
    formData.append("meetingType", newEvent.meetingType);
    formData.append("registrationPeriod", newEvent.registrationPeriod);
  
    // Only append the image if the user has uploaded a new one
    if (newEvent.image) {
      formData.append("image", newEvent.image);
    }
  
    try {
      const response = await axios.put(
        `http://localhost:4000/api/v1/events/${currentEvent._id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
  
      if (response.data && response.data.data) {
        setEvents((prev) =>
          prev.map((event) =>
            event._id === currentEvent._id ? response.data.data : event
          )
        );
      } else {
        throw new Error("Invalid response from server");
      }
  
      setIsUpdateModalOpen(false);
      setNewEvent({
        title: "",
        description: "",
        date: "",
        time: "",
        category: "esports",
        image: null,
        meetingType: "online",
        registrationPeriod: "",
      });
      setImagePreview(null);
    } catch (err) {
      setError("Failed to update event: " + err.message);
    }
  };
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewEvent({ ...newEvent, image: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleDeleteEvent = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/v1/events/${id}`);
      setEvents((prev) => prev.filter((event) => event._id !== id));
    } catch (err) {
      setError("Failed to delete event");
    }
  };

  return (
    <div className="p-6">
      {/* Add Event Button */}
      <Button text="Add an Event" onClick={() => setIsAddModalOpen(true)} />

      {/* Sort and Search Filters */}
      <div className="mb-4 flex justify-between items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by Name or Description"
          className="px-4 py-2 rounded-lg bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-500 w-1/2 sm:w-1/3"
        />

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 rounded-lg bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="date">Sort by Date</option>
          <option value="alphabetically">Sort Alphabetically</option>
        </select>
      </div>

      {/* Add Event Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-white">Add Event</h3>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleAddEvent} className="space-y-4">
              <input
                type="text"
                placeholder="Event Name"
                value={newEvent.title}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, title: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                placeholder="Description"
                value={newEvent.description}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, description: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="date"
                value={newEvent.date}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, date: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="time"
                value={newEvent.time}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, time: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <select
                value={newEvent.category}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, category: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="esports">Esports</option>
                <option value="csevents">CS Events</option>
                <option value="mechevents">Mech Events</option>
                <option value="eeeevents">EEE Events</option>
                <option value="chemevents">Chemical Events</option>
                <option value="concert">Concert</option>
              </select>
              <select
                value={newEvent.meetingType}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, meetingType: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="online">Online</option>
                <option value="offline">Offline</option>
                <option value="hybrid">Hybrid</option>
              </select>
              <input
                type="text"
                placeholder="Registration Period"
                value={newEvent.registrationPeriod}
                onChange={(e) =>
                  setNewEvent({
                    ...newEvent,
                    registrationPeriod: e.target.value,
                  })
                }
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
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="mt-2 w-full h-32 object-cover rounded-lg"
                />
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
                  Add Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Events Grid */}
      {loading ? (
        <p className="text-white">Loading events...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6 py-4">
          {filteredEvents.map((event) => (
            <div
              key={event._id}
              className="bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={event.image}
                alt={event.title}
                crossOrigin="anonymous"
                className="w-fit mx-auto h-48 object-cover py-2"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-gray-400">{event.description}</p>
                <p className="text-gray-400">
                  {new Date(event.date).toLocaleDateString()}
                </p>
                <p className="text-gray-400">{event.time}</p>
                <p className="text-gray-400">{event.category}</p>
                <p className="text-gray-400">{event.meetingType}</p>
                <p className="text-gray-400">{event.registrationPeriod}</p>

                {/* Edit and Delete Buttons */}
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => {
                      setIsUpdateModalOpen(true);
                      setCurrentEvent(event);
                    }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    onClick={() => handleDeleteEvent(event._id)}
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

export default EventsSection;
