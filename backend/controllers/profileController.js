const asyncHandler = require('express-async-handler');
const Profile = require('../models/profileModel'); // Ensure this path is correct

// Get profile
const getProfile = asyncHandler(async (req, res) => {
  const profile = await Profile.findOne();
  res.json(profile);
});

// Create profile
const createProfile = asyncHandler(async (req, res) => {
  const { name, email, contact, stack, address, profilePicture, hero_desc, about_desc, experience, services, support, testimonials } = req.body;

  const profile = new Profile({
    name,
    email,
    contact,
    stack,
    address,
    profilePicture,
    hero_desc, 
    about_desc,
    experience,
    services,
    support,
    testimonials
  });

  const createdProfile = await profile.save();
  res.status(201).json(createdProfile);
});

// Update profile
const updateProfile = asyncHandler(async (req, res) => {
  const { name, email, contact, stack, address, profilePicture, hero_desc, about_desc, experience, services, support, testimonials } = req.body;

  const profile = await Profile.findById(req.params.id);

  if (profile) {
    profile.name = name || profile.name;
    profile.email = email || profile.email;
    profile.contact = contact || profile.contact;
    profile.stack = stack || profile.stack;
    profile.address = address || profile.address;
    profile.profilePicture = profilePicture || profile.profilePicture;
    profile.hero_desc = hero_desc || profile.hero_desc;
    profile.about_desc = about_desc || profile.about_desc;
    profile.experience = experience || profile.experience;
    profile.support = support || profile.support;
    profile.services = services || profile.services;
    profile.testimonials = testimonials || profile.testimonials;

    const updatedProfile = await profile.save();
    res.json(updatedProfile);
  } else {
    res.status(404);
    throw new Error('Profile not found');
  }
});

// Delete profile
const deleteProfile = asyncHandler(async (req, res) => {
  const profile = await Profile.findById(req.params.id);

  if (profile) {
    await profile.remove();
    res.json({ message: 'Profile removed' });
  } else {
    res.status(404);
    throw new Error('Profile not found');
  }
});

module.exports = {
  getProfile,
  createProfile,
  updateProfile,
  deleteProfile
};
