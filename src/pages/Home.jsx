import React from 'react'
import Banner from '../components/Banner'
import BlogPage from '../components/BlogPage'

const Home = () => {
  return (
    <div className=''>
      <Banner title="Welcome to our Blog" subtitle="Start your blog today and join a community of writers and readers who are passionate about sharing their stories and ideas. We offer everything you need to get started, from helpful tips and tutorials." />

      <div className="max-w-7xl mx-auto">
        <BlogPage />
      </div>
    </div>
  )
}

export default Home