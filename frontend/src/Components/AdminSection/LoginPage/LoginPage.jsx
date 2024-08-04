import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';

const LoginPage = () => {
  const [isActive, setIsActive] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/signup', { name, email, password });
      alert('User created successfully');
      setIsActive(false);
    } catch (error) {
      alert(error.response ? error.response.data.message : 'Signup failed');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (error) {
      alert('Invalid email or password');
    }
  };

  return (
    <section className='login section' id='login'>
      <div className={`login__container ${isActive ? 'active' : ''}`} id="login__container">
        <div className="login__form-container login__sign-up">
          <form onSubmit={handleSignup}>
            <h1>Create Account</h1>
            <div className="login__social-icons">
              <a href="*" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="*" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="*" className="icon"><i className="fa-brands fa-github"></i></a>
              <a href="*" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="login__form-container login__sign-in">
          <form onSubmit={handleLogin}>
            <h1>Sign In</h1>
            <div className="login__social-icons">
              <a href="*" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="*" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="*" className="icon"><i className="fa-brands fa-github"></i></a>
              <a href="*" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for sign-in</span>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <a href="*">Forget Your Password?</a>
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className="login__toggle-container">
          <div className="login__toggle">
            <div className="login__toggle-panel login__toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button className="hidden" id="login" onClick={handleToggle}>Sign In</button>
            </div>
            <div className="login__toggle-panel login__toggle-right">
              <h1>Hello, Friend!</h1>
              <p>Register with your personal details to use all of site features</p>
              <button className="hidden" id="register" onClick={handleToggle}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
