import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    meetingType: {
      type: String,
      required: true,
    },
    registrationPeriod: {
      type: String,
      required: true,
    },
    googleForm: {
      type: String,
      default: "", // Made optional
    },
    longDescription: {
      type: String,
      default: "",
    },
    rules: {
      type: [String],
      default: [],
    },
    howToApply: {
      type: [String],
      default: [],
    },
    relatedEvents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
      },
    ],
  },
  { timestamps: true }
);

export const Event = mongoose.model("Event", eventSchema);
