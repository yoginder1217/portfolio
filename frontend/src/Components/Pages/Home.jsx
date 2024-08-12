import React from 'react';
import Header from '../Home/Header/Header';
import Hero from '../Home/Hero/Hero';
import About from '../Home/About/About';
import Skills from '../Home/Skills/Skills';
import Services from '../Home/Services/Services';
import Qualification from '../Home/Qualification/Qualification';
import Work from '../Home/Work/Work';
import Blog from '../Home/Blogs/Blog';
import Testimonials from '../Home/Testimonials/Testimonials';
import Contact from '../Home/Contact/Contact';
import Footer from '../Home/Footer/Footer';
import ScrollUp from '../Home/Scrollup/ScrollUp';

const Home = () => {
    
    return (
        <>
            <Header />
              <main className='main'>
                <Hero />
                <About />
                <Skills />
                <Services />
                <Qualification />
                <Work />
                <Blog />
                <Testimonials />
                <Contact />
              </main>
              <Footer />
              <ScrollUp />
        </>
    )
}

export default Home;