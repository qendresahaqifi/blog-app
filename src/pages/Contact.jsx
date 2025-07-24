import React, { useState } from 'react';
import Banner from '../components/Banner';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${formData.name}, we’ll get back to you soon!`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>

      <Banner title='Contact Us' subtitle="Have questions, ideas, or just want to say hello? We'd love to hear from you and start a conversation." />

        <div className="max-w-xl mx-auto my-16 px-6">
          <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-700 shadow-lg rounded-2xl p-8 space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 text-center">
              Send us a message
            </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-stone-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-stone-400"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-stone-400"
              required
            />
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 rounded-xl shadow-md cursor-pointer transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>

    
  );
};

export default Contact;
