import React, { useEffect, useState } from "react";
import DefaultImg from '../../../assets/Default-img.png';
import axios from "axios";
import "./profile.css";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    contact: "",
    stack: "",
    profilePicture: "",
    hero_desc: "",
    about_desc: "",
    experience: "",
    support: "",
  });
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get("/api/profile", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        if (data) {
          setProfile(data);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const { data } = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setProfile({ ...profile, profilePicture: data });
      setUploading(false);
    } catch (error) {
      console.error("Error uploading image:", error);
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (profile._id) {
        await axios.put(`/api/profile/${profile._id}`, profile, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
      } else {
        await axios.post("/api/profile", profile, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
      }
      window.location.reload();
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/profile/${profile._id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      window.location.reload();
    } catch (error) {
      console.error("Error deleting profile:", error);
    }
  };

  return (
    <div className="profile__container">
      <h3 className="profile__header">Edit Profile</h3>
      <div className="profile__form-container">
        <form className="profile__form" onSubmit={handleSubmit}>
          <div className="profile__left-column">
            <div className="profile__avatar-container">
              <img
                id="profileAvatar"
                className="profile__avatar"
                src={profile.profilePicture || DefaultImg}
                alt="avatar_profile"
              />
              <label className="profile__file-input-label">
                <input
                  type="file"
                  accept=".jpeg, .png, .jpg"
                  className="profile__file-input"
                  onChange={uploadFileHandler}
                />
              </label>
            </div>

            <div className="profile__form-group">
              <label htmlFor="name" className="profile__label">
                Name <span className="profile__required">*</span>
              </label>
              <input
                className="profile__input"
                type="text"
                name="name"
                id="name"
                value={profile.name}
                onChange={handleChange}
                placeholder="Your Name"
                autoComplete="off"
              />
            </div>

            <div className="profile__form-group">
              <label htmlFor="email" className="profile__label">
                Email <span className="profile__required">*</span>
              </label>
              <input
                className="profile__input"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={profile.email}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>

            <div className="profile__form-group">
              <label htmlFor="contact" className="profile__label">
                Contact <span className="profile__required">*</span>
              </label>
              <input
                className="profile__input"
                type="text"
                name="contact"
                id="contact"
                placeholder="Contact No."
                value={profile.contact}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
          </div>

          <div className="profile__right-column">
            <div className="profile__form-group">
              <label htmlFor="stack" className="profile__label">
                Stack
              </label>
              <input
                className="profile__input"
                type="text"
                name="stack"
                id="stack"
                value={profile.stack}
                onChange={handleChange}
                placeholder="Your Stack"
                autoComplete="off"
              />
            </div>

            <div className="profile__form-group">
              <label htmlFor="hero_desc" className="profile__label">
                Hero Description
              </label>
              <textarea
                name="hero_desc"
                id="hero_desc"
                className="profile__textarea"
                value={profile.hero_desc}
                onChange={handleChange}
                placeholder="Your Description"
              ></textarea>
            </div>

            <div className="profile__form-group">
              <label htmlFor="about_desc" className="profile__label">
                About Description
              </label>
              <textarea
                name="about_desc"
                id="about_desc"
                className="profile__textarea"
                value={profile.about_desc}
                onChange={handleChange}
                placeholder="Your Description"
              ></textarea>
            </div>

            <div className="profile__form-group">
              <label htmlFor="experience" className="profile__label">
                Experience
              </label>
              <div className="profile__select-container">
                <select
                  id="experience"
                  name="experience"
                  className="profile__select"
                  value={profile.experience}
                  onChange={handleChange}
                >
                  <option hidden>Select Experience</option>
                  <option value="1 Year Working">1 Year Working</option>
                  <option value="2 Years Working">2 Years Working</option>
                  <option value="3 Years Working">3 Years Working</option>
                  <option value="4 Years Working">4 Years Working</option>
                  <option value="5+ Years Working">5+ Years Working</option>
                </select>
                <i className="profile__dropdown-icon"></i>
              </div>
            </div>

            <div className="profile__form-group">
              <label htmlFor="support" className="profile__label">
                Support
              </label>
              <div className="profile__select-container">
                <select
                  id="support"
                  name="support"
                  className="profile__select"
                  value={profile.support}
                  onChange={handleChange}
                >
                  <option hidden>Select Support</option>
                  <option value="Everyday">Everyday</option>
                  <option value="Weekday">Weekday</option>
                  <option value="Weekend">Weekend</option>
                </select>
                <i className="profile__dropdown-icon"></i>
              </div>

              <div className="profile__upload-button-container">
                <button className="profile__upload-button">
                  {uploading ? "Uploading..." : "Upload"}
                </button>
              </div>
            </div>

            <div className="profile__save-button-container">
              <button type="submit" className="profile__save-button">
                Save
              </button>
            </div>
            <div className="profile__delete-button-container">
              <button type="button" className="profile__delete-button" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
