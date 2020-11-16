const mongoose = require("mongoose");
const { SharkSchema } = require("./shark.model");
const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    hasSharks: [SharkSchema],
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
