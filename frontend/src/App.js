// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Services from './Components/Services/Services';
import Qualification from './Components/Qualification/Qualification';
import Work from './Components/Work/Work';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import ScrollUp from './Components/Scrollup/ScrollUp';
import Blog from './Components/Blogs/Blog';
import LoginPage from './Components/AdminSection/LoginPage/LoginPage';
import Dashboard from './Components/AdminSection/Dashboard/Dashboard';


function App() {
  return (
    <Router>
      <Routes>
        {/* Portfolio Page Route */}
        <Route 
          path="/" 
          element={
            <>
              <Header />
              <main className='main'>
                <Home />
                <About />
                <Skills />
                <Services />
                <Qualification />
                <Work />
                <Blog/>
                <Testimonials />
                <Contact />
              </main>
              <Footer />
              <ScrollUp />
            </>
          } 
        />
        {/* Login Page Route */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

const PrivateRoute = ({ component: Component }) => {
  return localStorage.getItem('token') ? (
    <Component />
  ) : (
    <Navigate to="/login" />
  );
};


export default App;
