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
    longDescription,
    rules,
    howToApply,
    relatedEvents,
    googleForm,
  } = req.body;

  // Check for the required fields (excluding the new optional ones)
  if (
    !title ||
    !description ||
    !date ||
    !time ||
    !category ||
    !meetingType ||
    !registrationPeriod
  ) {
    throw new ApiError(400, "Please fill all the required fields");
  }

  if (!req.file) {
    throw new ApiError(400, "Please upload the event image");
  }

  // Upload the image
  const eventImagePath = req.file.path;
  const eventImage = await uploadOnCloudinary(eventImagePath);
  if (!eventImage) {
    throw new ApiError(500, "Something went wrong while uploading the image");
  }

  // Create the event. For the extra fields:
  // - If the client sends rules, howToApply, or relatedEvents, we parse them (assuming they are JSON strings)
  const event = await Event.create({
    title,
    description,
    date,
    time,
    category,
    image: eventImage.url,
    meetingType,
    registrationPeriod,
    longDescription: longDescription || "",
    rules: rules ? JSON.parse(rules) : [],
    howToApply: howToApply ? JSON.parse(howToApply) : [],
    relatedEvents: relatedEvents ? JSON.parse(relatedEvents) : [],
    googleForm: googleForm || "",
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
  // If the client sends any of these fields as JSON strings, parse them first:
  if (req.body.rules) {
    req.body.rules = JSON.parse(req.body.rules);
  }
  if (req.body.howToApply) {
    req.body.howToApply = JSON.parse(req.body.howToApply);
  }
  if (req.body.relatedEvents) {
    req.body.relatedEvents = JSON.parse(req.body.relatedEvents);
  }

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
