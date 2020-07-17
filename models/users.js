const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    imgUrl: { type: String },
    location: { type: String }
  },
  { timestamps: true }
)

module.exports = mongoose.model('users', User)