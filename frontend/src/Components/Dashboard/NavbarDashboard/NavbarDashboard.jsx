import React from 'react';
import ProfileImg from "../../../assets/profile.jpg";
import './navbarDashboard.css'; 

const NavbarDashboard = () => {
    return (
        <div className="navbar-container">
            <div className="navbar">
                <div className="navbar-logo">
                    <h3>Portfolio.</h3>
                </div>

                <div className="navbar-user">
                    <span className="navbar-username">Yoginder</span>
                    <img src={ProfileImg} alt="logo" className="navbar-avatar" />
                </div>
            </div>
        </div>
    );
};

export default NavbarDashboard;
