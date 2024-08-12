import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from "./Components/utils/notFound/NotFound";
import Home from './Components/Pages/Home';
import Auth from "./Components/Auth/AuthPage";
import Dashboard from './Components/Pages/Dashboard';
import DashboardProfile from './Components/Pages/DashboardProfile';
import './App.css';
import DashboardSkills from './Components/Pages/DashboardSkills';
import DashboardPortfolio from './Components/Pages/DashboardPortfolio';
import DashboardBlog from './Components/Pages/DashboardBlog';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="auth" element={<Auth />} />
          <Route element={<ProtectedRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<DashboardProfile />} />
            <Route path="skills" element={<DashboardSkills />} />
            <Route path="portfolio" element={<DashboardPortfolio />} />
            <Route path="blog" element={<DashboardBlog />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
