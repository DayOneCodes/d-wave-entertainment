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
    max: 31
  },
  location: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
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