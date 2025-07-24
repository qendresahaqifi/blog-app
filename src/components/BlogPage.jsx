import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import blogsData from '../api/blogsData.json';
import { FaUser } from 'react-icons/fa';
import SideBar from './SideBar';

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const [selectedCategory, setSelectedCategory] = useState(null);

  // category counts dynamically
  const categoryCounts = blogsData.reduce((acc, blog) => {
    acc[blog.category] = (acc[blog.category] || 0) + 1;
    return acc;
  }, {});

  const categories = Object.keys(categoryCounts);

  // filter blogs by selected category
  const filteredBlogs = selectedCategory
    ? blogsData.filter(blog => blog.category === selectedCategory)
    : blogsData;

  const totalPages = Math.ceil(filteredBlogs.length / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedBlogs = filteredBlogs.slice(startIndex, endIndex);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="p-4 space-y-6">
      {/* ------ category section ------ */}
      <div className="space-x-2 flex flex-wrap gap-2">
        <button
          onClick={() => handleCategoryChange(null)}
          className={`px-4 py-2 rounded cursor-pointer hover:bg-gray-300 ${
            !selectedCategory ? 'bg-yellow-400 text-white' : 'bg-gray-200 dark:bg-gray-300 text-gray-800'
          } transition-all duration-200 ease-in`}
        >
          All ({blogsData.length})
        </button>

        {categories.map(category => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 rounded cursor-pointer hover:bg-gray-300 ${
              selectedCategory === category ? 'bg-yellow-400 text-white' : 'bg-gray-200 dark:bg-gray-300 text-gray-800'
            } transition-all duration-200 ease-in`}
          >
            {category} ({categoryCounts[category]})
          </button>
        ))}
      </div>

      {/* ------ blog cards & sidebar ------ */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* ------ blog cards ------ */}
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
          {paginatedBlogs.map(blog => (
            <Link
              key={blog.id}
              to={`/blogs/${blog.id}`}
              className="p-5 shadow-lg rounded cursor-pointer bg-white dark:bg-gray-700 dark:text-gray-300 hover:shadow-xl transition"
            >
              <div>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded"
                />
              </div>
              <h2 className="mt-4 mb-2 font-bold hover:text-blue-500 cursor-pointer">
                {blog.title}
              </h2>
              <p className="mb-2 text-gray-600 dark:text-gray-400">
                <FaUser className="inline-flex items-center mr-2" />
                {blog.author}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Published: {blog.published_date}</p>
            </Link>
          ))}
        </div>

        {/* ------ sidebar ------ */}
        <div>
          <SideBar />
        </div>
      </div>

      {/* ------ numbered pagination ------ */}
      <div className="flex justify-center items-center gap-1 flex-wrap mt-6">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded cursor-pointer ${
              currentPage === page
                ? 'bg-yellow-400 text-white'
                : 'bg-gray-200 hover:bg-orange-100'
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogPage;
