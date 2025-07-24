import React, { useEffect, useState } from 'react';
import blogsData from '../api/blogsData.json';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const SideBar = () => {
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [popularBlogs, setPopularBlogs] = useState([]);

  useEffect(() => {
    // latest blogs sorted by date
    const sorted = [...blogsData].sort((a, b) => {
      return new Date(b.published_date) - new Date(a.published_date);
    });
    setLatestBlogs(sorted.slice(0, 5)); // top 5
    setPopularBlogs(sorted.slice(5, 10)); // 6 - 10
  }, []);

  return (
    <div className="bg-white dark:bg-gray-700 dark:text-gray-300 p-4 rounded shadow">     
      {/* ------ latest blogs ------ */}
      <div className='mb-15'>
          <h3 className="text-2xl font-semibold px-4 mb-4">Latest Blogs</h3>
          <ul className="space-y-2">
            {latestBlogs.map(blog => (
              <li key={blog.id} className='px-4 my-5'>
                <h4 className='font-medium text-blue-500 dark:text-blue-600'>{blog.title}</h4>
                <Link
                  to={`/blogs/${blog.id}`}
                  className="text-base hover:text-yellow-400 inline-flex items-center py-1"
                >
                  Read more <FaArrowRight className='mt-1 ml-2' />
                </Link>
                <p className="text-sm text-gray-500 dark:text-gray-100">Published: {blog.published_date}</p>
                <hr className='mt-2 text-gray-300' />
              </li>
              ))}
          </ul>
      </div>

      {/* ------ popular blogs ------ */}
      <div>
          <h3 className="text-2xl font-semibold px-4 mb-4">Popular Blogs</h3>
          <ul className="space-y-2">
            {popularBlogs.map(blog => (
              <li key={blog.id} className='px-4 my-5'>
                <h4 className='font-medium text-blue-500'>{blog.title}</h4>
                <Link
                  to={`/blogs/${blog.id}`}
                  className="text-base hover:text-yellow-400 inline-flex items-center py-1"
                >
                  Read more <FaArrowRight className='mt-1 ml-2' />
                </Link>
                <p className="text-sm text-gray-500">Published: {blog.published_date}</p>
                <hr className='mt-2 text-gray-300' />
              </li>
              ))}
          </ul>
      </div>
    </div>
  );
};

export default SideBar;
