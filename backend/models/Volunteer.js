const mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    phone: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    age: {
      type: Number,
      required: true,
    },

    skills: {
      type: String,
      required: true,
    },

    availability: {
      type: String,
      required: true,
    },

    motivation: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Volunteer", volunteerSchema);