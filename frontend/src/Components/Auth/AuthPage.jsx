import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import './authpage.css';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/api/admin/login', { email, password });
      login(data.token);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <section className='auth section' id='auth'>
      <div className='auth__container' id="auth__container">
        <div className="auth__form-container auth__sign-in">
          <form onSubmit={submitHandler}>
            <h1>Sign In</h1>
            <div className="auth__social-icons">
              <a href="*" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="*" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="*" className="icon"><i className="fa-brands fa-github"></i></a>
              <a href="*" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for sign-in</span>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <a href="*">Forget Your Password?</a>
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className="auth__toggle-container">
          <div className="auth__toggle">
            <div className="auth__toggle-panel auth__toggle-right">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button className="auth_hidden" id="auth">Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthPage;
