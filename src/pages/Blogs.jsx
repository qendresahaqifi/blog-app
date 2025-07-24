import React from 'react'
import BlogPage from '../components/BlogPage'
import Banner from '../components/Banner'

const Blog = () => {
  return (
    <div>
      
      <Banner title="Blogs" subtitle="Explore stories, insights, and ideas that spark curiosity, inspire action, and connect people through the power of words." />
      {/* ------ all blogs container ------ */}
      <div className='max-w-7xl mx-auto'>
        <BlogPage />
      </div>

    </div>
  )
}

export default Blog