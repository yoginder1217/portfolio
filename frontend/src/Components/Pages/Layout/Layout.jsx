import React from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import NavbarDashboard from "../../Dashboard/NavbarDashboard/NavbarDashboard";
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import './layout.css'; // Import custom CSS file

const Layout = ({ children }) => {
    // const { user } = useSelector((state) => state.auth);
    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (user.isLoggedOut) {
    //         navigate("/");
    //     }
    // }, [user, navigate]);

    return (
        <div className="layout-container">
            <Sidebar />
            <div className="layout-content">
                <NavbarDashboard />
                <main>{children}</main>
            </div>
        </div>
    );
}

export default Layout;
