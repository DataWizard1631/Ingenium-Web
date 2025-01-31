import { Event } from '../models/event.model.js';
import { ApiError, ApiResponse, asyncHandler } from '../utils/allUtils.js';

const createEvent = asyncHandler(async (req, res) => {
  const event = await Event.create(req.body);
  return res.status(201).json(
    new ApiResponse(201, event, "Event created successfully")
  );
});

const getAllEvents = asyncHandler(async (req, res) => {
  const events = await Event.find();
  return res.status(200).json(
    new ApiResponse(200, events, "Events fetched successfully")
  );
});

const getEventById = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (!event) {
    throw new ApiError(404, "Event not found");
  }
  return res.status(200).json(
    new ApiResponse(200, event, "Event fetched successfully")
  );
});

const updateEvent = asyncHandler(async (req, res) => {
  const event = await Event.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  if (!event) {
    throw new ApiError(404, "Event not found");
  }
  return res.status(200).json(
    new ApiResponse(200, event, "Event updated successfully")
  );
});

const deleteEvent = asyncHandler(async (req, res) => {
  const event = await Event.findByIdAndDelete(req.params.id);
  if (!event) {
    throw new ApiError(404, "Event not found");
  }
  return res.status(200).json(
    new ApiResponse(200, null, "Event deleted successfully")
  );
});

export {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent
}; 