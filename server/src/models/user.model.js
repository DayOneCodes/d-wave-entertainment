import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  profilePictureUrl: {

  },
  role: {
    type: String,
    required: true,
    default: "user",
    enum: ["user", "admin"]
  },
  lastLogin: {
    type: Date,
    default: Date.now()
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  verificationToken: String,
  verificationTokenExpiresAt: Date,
  resetPasswordToken: String,
  resetPasswordTokenExpiresAt: Date,
},
{ timestamps: true },
)

export const User = mongoose.model("User", UserSchema);