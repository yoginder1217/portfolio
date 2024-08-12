import React, { useState, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"; // Import useNavigate
import Auth from "../../Pages/Auth";
import LogoImg from "../../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBook,
  faBriefcase,
  faPen,
  faEnvelope,
  faSignOutAlt,
  faChevronLeft,
  faChevronRight,
  faGear, // Import the icon for Services
} from "@fortawesome/free-solid-svg-icons";
import "./sidebar.css"; // Custom CSS for the sidebar

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const sidebarRef = useRef(null);
  const token = localStorage.getItem('token');
  const navigate = useNavigate(); // Initialize useNavigate

  const menus = [
    { title: "Dashboard", icon: faHome, link: "/dashboard" },
    { title: "Profile", icon: faUser, link: "/profile" },
    { title: "Skills", icon: faBook, link: "/skills" },
    { title: "Services", icon: faGear, link: "/services" },
    { title: "Portfolio", icon: faBriefcase, link: "/portfolio" },
    { title: "Blog", icon: faPen, link: "/blog" },
    { title: "Contact", icon: faEnvelope, link: "/contact" },
  ];

  const scrollToBottom = () => {
    if (sidebarRef.current) {
      sidebarRef.current.scrollTop = sidebarRef.current.scrollHeight;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/auth'); // Redirect to Auth page after logout
  };

  return (
    <div
      ref={sidebarRef}
      className={`${open ? "sidebar-expanded" : "sidebar-collapsed"} sidebar`}
    >
      <button className="toggle-button" onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={open ? faChevronLeft : faChevronRight} />
      </button>
      <Link to="/dashboard" className="logo">
        <img
          src={LogoImg}
          alt="Logo"
          className={`logo-img ${open && "rotate-logo"}`}
        />
        <span className={`logo-text ${!open && "hidden"}`}>
          Dashboard
        </span>
      </Link>
      <ul className="menu-list">
        {menus.map((menu, index) => (
          <li key={index} className="menu-item">
            <NavLink to={menu.link} className="menu-link">
              <FontAwesomeIcon icon={menu.icon} className="menu-icon" />
              <span className={`menu-title ${!open && "hidden"}`}>
                {menu.title}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
      <button className="scroll-to-bottom-button" onClick={scrollToBottom}>
      </button>
      {token ? (
        <button className="logout-button" onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} className="menu-icon" />
          <span className={`menu-title ${!open && "hidden"}`}>
            Logout
          </span>
        </button>
      ) : (
        <Auth />
      )}
    </div>
  );
};

export default Sidebar;
