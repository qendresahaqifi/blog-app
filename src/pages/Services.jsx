import React from 'react';
import Banner from '../components/Banner';
import BlogPage from '../components/BlogPage'

const Services = () => {
  return (
    <div className="">
      <Banner title="Our Services" subtitle="Discover the solutions we offer to help you grow, create, and succeed - designed with care, delivered with purpose." />

       {/* ------ all blogs container ------ */}
        <div className='max-w-7xl mx-auto'>
          <BlogPage />
        </div>

    </div>
  );
};

export default Services;
