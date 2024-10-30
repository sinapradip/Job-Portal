import mongoose from "mongoose";

// Create a schema
const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["Employee", "Recruiter"],
      required: true,
    },
    profile: {
      bio: { type: String },
      skills: { type: String },
      resume: { type: String },
      resumeOriginalName: { type: String },
      company: {
        type: mongoose.Schema.Types.ObjectId, // ref to company model
        ref: "company",
      },
      profilephoto: {
        type: String,
        default: "",
      },
    },
  },
  { timestamps: true }
);

export const User = mongoose.Schema('User', userSchema);
