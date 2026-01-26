import mongoose, {Schema} from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: function(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);},
      message: "Invalid email address"
    }
  },
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 30,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String, 
    enum: ["user", "admin"],
    default: "user"
  },
  refreshTokenHash: {
    type: String,
    default: null,
  }
},
{ timestamps: true});

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password)
}

userSchema.pre("save", async function () {
  if (this.isModified("password")) {
  this.password = await bcrypt.hash(this.password, 10)};
})

export const User = mongoose.model("User", userSchema);