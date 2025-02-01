import { Event } from "../models/event.model.js";
import { ApiError, ApiResponse, asyncHandler } from "../utils/allUtils.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
const createEvent = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    date,
    time,
    category,
    meetingType,
    registrationPeriod,
  } = req.body;
  if (!title) {
    throw new ApiError(400, "Please provide event title");
  }
  if (!description) {
    throw new ApiError(400, "Please provide event description");
  }
  if (!date) {
    throw new ApiError(400, "Please provide event date");
  }
  if (!time) {
    throw new ApiError(400, "Please enter time");
  }
  if (!category) {
    throw new ApiError(400, "Please enter category");
  }
  if (!meetingType) {
    throw new ApiError(400, "Please enter meetingType");
  }
  if (!registrationPeriod) {
    throw new ApiError(400, "Please enter registrationPeriod");
  }

  if (!req.file) {
    throw new ApiError(400, "Please upload the event image");
  }
  const eventImagePath = req.file.path;
  const eventImage = await uploadOnCloudinary(eventImagePath);
  if (!eventImage) {
    throw new ApiError(500, "Something went wrong while uploading the image");
  }
  const event = await Event.create({
    title,
    description,
    date,
    time,
    category,
    image: eventImage.url,
    meetingType,
    registrationPeriod,
  });
  return res
    .status(201)
    .json(new ApiResponse(201, event, "Event created successfully"));
});

const getAllEvents = asyncHandler(async (req, res) => {
  const events = await Event.find();
  return res
    .status(200)
    .json(new ApiResponse(200, events, "Events fetched successfully"));
});

const getEventById = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (!event) {
    throw new ApiError(404, "Event not found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, event, "Event fetched successfully"));
});

const updateEvent = asyncHandler(async (req, res) => {
  const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!event) {
    throw new ApiError(404, "Event not found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, event, "Event updated successfully"));
});

const deleteEvent = asyncHandler(async (req, res) => {
  const event = await Event.findByIdAndDelete(req.params.id);
  if (!event) {
    throw new ApiError(404, "Event not found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, null, "Event deleted successfully"));
});

export { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent };
