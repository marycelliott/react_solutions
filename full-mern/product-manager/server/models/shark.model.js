const mongoose = require("mongoose");

const SharkSchema = new mongoose.Schema(
  {
    species: {
      type: String,
      required: [true, "Species is required."],
      minlength: [5, "Species must be at least 5 characters long."],
    },
    location: {
      type: String,
      required: [true, "Location is required."],
      minlength: [2, "Location must be at least 2 characters long."],
    },
    url: { type: String, required: [true, "image URL is required."] },
    ferocity: {
      type: Number,
      required: [true, "Ferocity is required."],
      min: [1, "Ferocity must be between 1 and 5"],
      max: [5, "Ferocity must be between 1 and 5"],
    },
  },
  { timestamps: true }
);

const Shark = mongoose.model("Shark", SharkSchema);
module.exports = {
  Shark,
  SharkSchema,
};
// alternative way:
// module.exports.Person = mongoose.model("Person", PersonSchema);
