import mongoose, { Schema } from "mongoose";

const subscriberSchema = new Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    trim: true,
    index: true
  },
  subScribedAt: {
    type: Date,
    default: Date.now
  },
  source: {
    type: String,
    default: "newsletter"
  },
  ip: String,
  userAgent: String,
  flagged: {

  },
  wantsNewsletter: {
    type: Boolean,
    default: true
  },
  confirmed: {
    type: Boolean, 
    default: false
  }
},
{
  timestamps: true
})

export const Subscriber = mongoose.model("Subscriber", subscriberSchema)
