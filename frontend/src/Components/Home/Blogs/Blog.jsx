import React from 'react';
import './blog.css'
import Blogs from './Blogs';

const Blog = () => {
  return (
    <section className='blog section' id='blog'>
    <h2 className='section__title'>Blogs</h2>
    <span className='section__subtitle'>My Recent Publications</span>

    <Blogs/>
    </section>
  )
}

export default Blog
