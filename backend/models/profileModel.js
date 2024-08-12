const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  stack: { type: String, required: true },
  contact: { type: String },
  address: { type: String },
  profilePicture: { type: String },
  hero_desc: { type: String },
  about_desc: { type: String },
  experience: { type: String },
  services: [{ type: String }],
  support: {type: String},
  testimonials: [{ type: String }]
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
