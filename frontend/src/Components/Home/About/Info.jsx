import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Info = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get('/api/profile');
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    fetchProfile();
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <div className='about__info grid'>
        <div className='about__box'>
        <i className='bx bx-award about__icon'></i>

            <h3 className='about__title'>Experience</h3>
            <span className='about__subtitle'>{profile.experience}</span>
        </div>

        <div className='about__box'>
        <i className='bx bx-briefcase-alt about__icon'></i>

            <h3 className='about__title'>Completed</h3>
            <span className='about__subtitle'>3 + Projects</span>
        </div>

        <div className='about__box'>
        <i className='bx bx-support about__icon' ></i>

            <h3 className='about__title'>Support</h3>
            <span className='about__subtitle'>{profile.support}</span>
        </div>
    </div>
  )
}

export default Info
