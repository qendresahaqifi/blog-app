import React from 'react';
import Banner from '../components/Banner';
import BlogPage from '../components/BlogPage'

const About = () => {
  return (
    <div>
        <Banner title="About Us" subtitle="Learn about our journey, our values, and the people behind the mission - because every story starts with purpose." />
        {/* ------ all blogs container ------ */}
        <div className='max-w-7xl mx-auto'>
          <BlogPage />
        </div>
    </div>
    
  );
};

export default About;
