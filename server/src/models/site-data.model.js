import mongoose, { Schema } from "mongoose";

const siteDataSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: Array,

  }

},
{
    timestamps: true
})

export const SiteData = mongoose.model("SiteData", siteDataSchema);