import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['esports', 'csevents', 'mechevents', 'eeeevents', 'chemevents', 'concert']
  },
  image: {
    type: String,
    required: true
  },
  meetingType: {
    type: String,
    required: true,
    enum: ['online', 'offline', 'hybrid']
  },
  registrationPeriod: {
    type: String,
    required: true
  }
}, { timestamps: true });

export const Event = mongoose.model("Event", eventSchema); 