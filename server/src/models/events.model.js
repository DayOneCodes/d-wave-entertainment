import mongoose, { Schema }from "mongoose";

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minLength: 1,
    maxLength: 100
  },
  date: {
    type: Number,
    required: true,
    min: 1,
    max: 31,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  month: {
    type: String,
    required: true,
    trim: true
  },
  year: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  imageUrl: {
    type: String,
    required: true,
  },
  ticketUrl: {
    type: String,
    required: true,
  }
}, {
  timestamps: true
});

export const Event = mongoose.model("Event", eventSchema)