import mongoose, { Schema } from "mongoose";

const siteDataSchema = new Schema({
  
},
{
    timestamps: true
})

export const SiteData = mongoose.model("SiteData", siteDataSchema);