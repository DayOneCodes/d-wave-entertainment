import mongoose, { Schema } from "mongoose";

const subscriberSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  token: {
    type: String,
    required: true,
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
