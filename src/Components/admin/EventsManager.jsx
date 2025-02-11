import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
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
    longDescription: "",
    rules: "", // Each rule on a new line
    howToApply: "", // Each step on a new line
    relatedEvents: "", // Comma separated event IDs
  });
  const [currentEvent, setCurrentEvent] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("date");

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://ingenium-web-2.onrender.com/api/v1/events");
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

  // Pre-populate the update form when the update modal opens
  useEffect(() => {
    if (isUpdateModalOpen && currentEvent) {
      setNewEvent({
        title: currentEvent.title || "",
        description: currentEvent.description || "",
        date: currentEvent.date || "",
        time: currentEvent.time || "",
        category: currentEvent.category || "esports",
        image: null, // Do not prefill the file input; allow uploading a new image if desired
        meetingType: currentEvent.meetingType || "online",
        registrationPeriod: currentEvent.registrationPeriod || "",
        longDescription: currentEvent.longDescription || "",
        // Join arrays into a string for display in the textarea:
        rules: currentEvent.rules && Array.isArray(currentEvent.rules)
          ? currentEvent.rules.join("\n")
          : "",
        howToApply: currentEvent.howToApply && Array.isArray(currentEvent.howToApply)
          ? currentEvent.howToApply.join("\n")
          : "",
        relatedEvents: currentEvent.relatedEvents && Array.isArray(currentEvent.relatedEvents)
          ? currentEvent.relatedEvents.map(rel => rel.id).join(", ")
          : "",
      });
      // Set the image preview to the current event image
      setImagePreview(currentEvent.image);
    }
  }, [isUpdateModalOpen, currentEvent]);

  // Handle Add Event
  const handleAddEvent = async (e) => {
    e.preventDefault();
    setLoading(true);
    setIsAddModalOpen(false);
    const formData = new FormData();
    formData.append("title", newEvent.title);
    formData.append("description", newEvent.description);
    formData.append("date", newEvent.date);
    formData.append("time", newEvent.time);
    formData.append("category", newEvent.category);
    formData.append("meetingType", newEvent.meetingType);
    formData.append("registrationPeriod", newEvent.registrationPeriod);
    formData.append("longDescription", newEvent.longDescription);

    // Convert newline-separated text into arrays
    const rulesArray = newEvent.rules.split("\n").filter(rule => rule.trim() !== "");
    formData.append("rules", JSON.stringify(rulesArray));

    const howToApplyArray = newEvent.howToApply.split("\n").filter(step => step.trim() !== "");
    formData.append("howToApply", JSON.stringify(howToApplyArray));

    // Convert comma-separated related events into an array
    const relatedEventsArray = newEvent.relatedEvents.split(",").map(id => id.trim()).filter(id => id !== "");
    formData.append("relatedEvents", JSON.stringify(relatedEventsArray));

    if (newEvent.image) {
      formData.append("image", newEvent.image);
    }

    try {
      const response = await axios.post(
        "https://ingenium-web-2.onrender.com/api/v1/events",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      if (response.data && response.data.data) {
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
        longDescription: "",
        rules: "",
        howToApply: "",
        relatedEvents: "",
      });
      setImagePreview(null);
    } catch (err) {
      setError("Failed to add event: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle Update Event
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
    formData.append("longDescription", newEvent.longDescription);

    const rulesArray = newEvent.rules.split("\n").filter(rule => rule.trim() !== "");
    formData.append("rules", JSON.stringify(rulesArray));

    const howToApplyArray = newEvent.howToApply.split("\n").filter(step => step.trim() !== "");
    formData.append("howToApply", JSON.stringify(howToApplyArray));

    const relatedEventsArray = newEvent.relatedEvents.split(",").map(id => id.trim()).filter(id => id !== "");
    formData.append("relatedEvents", JSON.stringify(relatedEventsArray));

    if (newEvent.image) {
      formData.append("image", newEvent.image);
    }

    try {
      const response = await axios.put(
        `https://ingenium-web-2.onrender.com/api/v1/events/${currentEvent._id}`,
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
        longDescription: "",
        rules: "",
        howToApply: "",
        relatedEvents: "",
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
      await axios.delete(`https://ingenium-web-2.onrender.com/api/v1/events/${id}`);
      setEvents((prev) => prev.filter((event) => event._id !== id));
    } catch (err) {
      setError("Failed to delete event");
    }
  };

  return (
    <div className="p-6 mt-10">
      {/* Add Event Button */}
      <p className="font-primaryFont text-6xl text-fuchsia-50">MANAGE EVENTS</p>
      <Button text="Add an Event" onClick={() => setIsAddModalOpen(true)} />

      {loading && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50">
          <Loader />
        </div>
      )}

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
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md overflow-auto max-h-screen">
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

              {/* Additional fields for Event Details */}
              <textarea
                placeholder="Long Description"
                value={newEvent.longDescription}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, longDescription: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                placeholder="Rules (one per line)"
                value={newEvent.rules}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, rules: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                placeholder="How to Apply (one per line)"
                value={newEvent.howToApply}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, howToApply: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                placeholder="Related Events (comma separated IDs)"
                value={newEvent.relatedEvents}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, relatedEvents: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-500"
              />

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

      {/* Update Event Modal */}
      {isUpdateModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md overflow-auto max-h-screen">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-white">Update Event</h3>
              <button
                onClick={() => {
                  setIsUpdateModalOpen(false);
                  setCurrentEvent(null);
                }}
                className="text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleUpdateEvent} className="space-y-4">
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
              />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="mt-2 w-full h-32 object-cover rounded-lg"
                />
              )}
              {/* Additional fields for Event Details */}
              <textarea
                placeholder="Long Description"
                value={newEvent.longDescription}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, longDescription: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                placeholder="Rules (one per line)"
                value={newEvent.rules}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, rules: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                placeholder="How to Apply (one per line)"
                value={newEvent.howToApply}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, howToApply: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                placeholder="Related Events (comma separated IDs)"
                value={newEvent.relatedEvents}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, relatedEvents: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsUpdateModalOpen(false);
                    setCurrentEvent(null);
                  }}
                  className="px-4 py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500"
                >
                  Update Event
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
              <div className="p-4 font-secFont2">
                <h3 className="text-xl font-semibold">Title: {event.title}</h3>
                <p className="text-gray-400">Description: {event.description}</p>
                <p className="text-gray-400">
                  Date: {new Date(event.date).toLocaleDateString()} (MM/DD/YYYY)
                </p>
                <p className="text-gray-400">Time: {event.time}</p>
                <p className="text-gray-400">Category: {event.category}</p>
                <p className="text-gray-400">Meeting Type: {event.meetingType}</p>
                <p className="text-gray-400">Registration Period: {event.registrationPeriod}</p>

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
