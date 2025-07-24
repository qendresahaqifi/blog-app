Blogg-App

-- Project Overview --

A modern, responsive blog platform built with React, featuring multiple pages, dark mode, pagination, category filtering, and more. This app aims to provide a seamless experience for readers and writers to share and explore engaging stories and ideas.


-- Features --

=> Multi-page React App with React Router (Home, Blogs, About, Services, Contact)
=> Responsive Design for optimal viewing on various devices (desktop, tablet, mobile)
=> Dark Mode toggle for user preference saved in localStorage
=> Pagination for efficient navigation through large datasets
=> Category filtering for easy discovery of relevant content
=> Blog post details page with author info, comments, and social sharing
=> Sidebar showing latest and popular blogs
=> Contact form
=> Scroll to top functionality
=> Navbar with logo, modal login and social links
=> User- friendly UI


-- Technologies Used --

=> React
=> React Router
=> Tailwind CSS
=> React Icons
=> Local JSON data for blogs ('blogsData.json')
=> State management with React Hooks


-- Project Structure --

- scr/
    - api/
        - blogsData.json    # Blog data source
    - components/
        - Banner.jsx    # Banner with title and subtitle
        - BlogPage.jsx  # Blog listening with pagination and filters
        - Footer.jsx    # Links and subscription form
        - Modal.jsx     # Modal for login form
        - NavBar.jsx    # Navigation bar with mobile menu and dark mode
        - ScrollToTop.jsx   # Scrolls to top on route change
        - ScrollToTopButton.jsx     # Scroll to top button
        - Sidebar.jsx    # Latest and popular blogs
    - layout/
        - AppTheme.jsx  # Dark mode toggle logic
    - pages/
        - About.jsx
        - Blogs.jsx
        - Contact.jsx
        - Home.jsx
        - Services.jsx
        - SingleBlog.jsx    # Single blog post page
    - App.jsx   # Main app with routes and layout
    - index.js  # Root component



    -- Getting started --

    1. Clone the repository
        git clone https://github.com/qendresahaqifi/blog-app.git
    2. Install dependencies: npm install
    3. Start the app: npm run dev
    4. Open your browser and navigate to http://localhost:5173


MIT License © Qendresa Haqifi