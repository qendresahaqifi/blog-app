import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogsData from '../api/blogsData.json';
import { FaClock, FaUser } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import SideBar from '../components/SideBar';

const SingleBlog = () => {
  const { id } = useParams();
  const blog = blogsData.find(b => String(b.id) === id);

  if (!blog) {
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold">Blog not found 😕</h2>
        <Link to="/blogs" className="text-blue-500 hover:underline">Back to blogs</Link>
      </div>
    );
  }

  return (
    <div className='mt-32 mb-18'>
        <div className="flex flex-col max-w-7xl mx-auto md:flex-row gap-12 p-4">
            <div className='lg:w-2/3 mx-auto'>
                <h1 className="text-3xl font-bold mb-10 text-blue-500">{blog.title}</h1>
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-64 object-cover mb-6 rounded"
                />
                <p className="text-gray-500 dark:text-gray-300 mb-2">Published: {blog.published_date}</p>
                <p className="mb-2 text-gray-600 dark:text-gray-400"><FaUser className="inline-flex items-center mr-2" /> {blog.author}</p>
                <p className="mb-2 text-gray-600 dark:text-gray-400"><FaClock className="inline-flex items-center mr-2" /> {blog.reading_time}</p>
                <p className="text-lg leading-relaxed my-6 text-gray-900 dark:text-gray-200">{blog.content}</p>
                <div className='text-base text-gray-600 dark:text-gray-400'>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id praesentium reprehenderit dolor? Autem at commodi quae aspernatur voluptate voluptatibus nemo porro, debitis minima labore nulla.</p> <br/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nam enim repudiandae non eligendi culpa.</p><br/>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere consectetur delectus et modi, laboriosam maxime corporis non qui fugit, tempore necessitatibus ab corrupti enim, voluptatibus quaerat iure saepe quasi explicabo dolores pariatur magnam officia earum nobis? Repellat perspiciatis exercitationem quae.</p><br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus tempore, architecto optio voluptates quasi, earum, unde sunt pariatur quidem dolore facere porro laboriosam eaque corrupti eligendi ullam sit quo magnam ipsam ipsum voluptatum eveniet. Eaque quam quae enim, atque eum animi doloremque. Quia beatae dignissimos alias eaque nobis ipsa pariatur iusto, ratione quaerat quo quis!</p><br/>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere consectetur delectus et modi, laboriosam maxime corporis non qui fugit, tempore necessitatibus ab corrupti enim, voluptatibus quaerat iure saepe quasi explicabo dolores pariatur magnam officia earum nobis? Repellat perspiciatis exercitationem quae.</p><br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus tempore, architecto optio voluptates quasi, earum, unde sunt pariatur quidem dolore facere porro laboriosam eaque corrupti eligendi ullam sit quo magnam ipsam ipsum voluptatum eveniet. Eaque quam quae enim, atque eum animi doloremque. Quia beatae dignissimos alias eaque nobis ipsa pariatur iusto, ratione quaerat quo quis!</p><br/>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere consectetur delectus et modi, laboriosam maxime corporis non qui fugit, tempore necessitatibus ab corrupti enim, voluptatibus quaerat iure saepe quasi explicabo dolores pariatur magnam officia earum nobis? Repellat perspiciatis exercitationem quae.</p><br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus tempore, architecto optio voluptates quasi, earum, unde sunt pariatur quidem dolore facere porro laboriosam eaque corrupti eligendi ullam sit quo magnam ipsam ipsum voluptatum eveniet. Eaque quam quae enim, atque eum animi doloremque. Quia beatae dignissimos alias eaque nobis ipsa pariatur iusto, ratione quaerat quo quis!</p><br/>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere consectetur delectus et modi, laboriosam maxime corporis non qui fugit, tempore necessitatibus ab corrupti enim, voluptatibus quaerat iure saepe quasi explicabo dolores pariatur magnam officia earum nobis? Repellat perspiciatis exercitationem quae.</p><br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus tempore, architecto optio voluptates quasi, earum, unde sunt pariatur quidem dolore facere porro laboriosam eaque corrupti eligendi ullam sit quo magnam ipsam ipsum voluptatum eveniet. Eaque quam quae enim, atque eum animi doloremque. Quia beatae dignissimos alias eaque nobis ipsa pariatur iusto, ratione quaerat quo quis!</p>
                </div>
                <Link to="/blogs" className="inline-block mt-6 text-blue-500 hover:underline font-bold">
                    <FaArrowLeft className='inline-flex items-center mr2.' /> Back to all blogs
                </Link>
            </div>
            <div className='lg:w-1/3'>
                <SideBar />
            </div>
        </div>
    </div>
    
  );
};

export default SingleBlog;
