import React, { useState } from 'react';

// Main App component that renders the Navbar
export default function Navbar() {

  // State to manage the visibility of the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // State to manage the visibility of each dropdown
  const [dropdownOpen, setDropdownOpen] = useState({});

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to set a specific dropdown's visibility (true for open, false for close)
  const setDropdownState = (menuName, isOpen) => {
    setDropdownOpen(prevState => ({
      ...prevState,
      [menuName]: isOpen
    }));
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Brand Logo/Name */}
        <a href="#" className="navbar-brand">
          MyBrand
        </a>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <div className="navbar-mobile-button-wrapper">
          <button
            onClick={toggleMobileMenu}
            className="navbar-mobile-button"
            aria-label="Toggle navigation"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="navbar-mobile-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-desktop-menu">
          {/* Home Link */}
          <NavLink href="#">Home</NavLink>

          {/* Services Dropdown */}
          <Dropdown
            title="Services"
            isOpen={dropdownOpen['services']}
            onMouseEnter={() => setDropdownState('services', true)}
            onMouseLeave={() => setDropdownState('services', false)}
            items={[
              { name: 'Web Design', href: '#' },
              { name: 'Development', href: '#' },
              { name: 'SEO', href: '#' },
              { name: 'Consulting', href: '#' },
            ]}
          />

          {/* Products Dropdown */}
          <Dropdown
            title="Products"
            isOpen={dropdownOpen['products']}
            onMouseEnter={() => setDropdownState('products', true)}
            onMouseLeave={() => setDropdownState('products', false)}
            items={[
              { name: 'Product A', href: '#' },
              { name: 'Product B', href: '#' },
              { name: 'Product C', href: '#' },
            ]}
          />

          {/* About Link */}
          <NavLink href="#">About</NavLink>

          {/* Contact Link */}
          <NavLink href="#">Contact</NavLink>
        </div>
      </div>

      {/* Mobile Menu (conditionally rendered) */}
      {isMobileMenuOpen && (
        <div className="navbar-mobile-menu">
          <MobileNavLink href="#">Home</MobileNavLink>
          {/* Mobile dropdowns still use click for better touch experience */}
          <MobileDropdown
            title="Services"
            isOpen={dropdownOpen['services']}
            toggle={() => setDropdownState('services', !dropdownOpen['services'])}
            items={[
              { name: 'Web Design', href: '#' },
              { name: 'Development', href: '#' },
              { name: 'SEO', href: '#' },
              { name: 'Consulting', href: '#' },
            ]}
          />
          <MobileDropdown
            title="Products"
            isOpen={dropdownOpen['products']}
            toggle={() => setDropdownState('products', !dropdownOpen['products'])}
            items={[
              { name: 'Product A', href: '#' },
              { name: 'Product B', href: '#' },
              { name: 'Product C', href: '#' },
            ]}
          />
          <MobileNavLink href="#">About</MobileNavLink>
          <MobileNavLink href="#">Contact</MobileNavLink>
        </div>
      )}
      {/* Embedded CSS for the Navbar and related components */}
      <style>
        {`
        body {
          margin: 0;
          font-family: 'Inter', sans-serif; /* Using Inter as specified */
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .app-container {
          min-height: 100vh;
          background-color: #f3f4f6; /* bg-gray-100 */
          color: #374151; /* text-gray-800 */
        }

        .main-content {
          max-width: 1200px; /* container mx-auto */
          margin-left: auto;
          margin-right: auto;
          padding: 24px; /* p-6 */
        }

        .main-title {
          font-size: 36px; /* text-4xl */
          font-weight: 700; /* font-bold */
          margin-bottom: 16px; /* mb-4 */
          text-align: center;
        }

        .main-description {
          font-size: 18px; /* text-lg */
          text-align: center;
        }

        .navbar {
          background: linear-gradient(to right, #2563eb, #4f46e5); /* bg-gradient-to-r from-blue-600 to-indigo-700 */
          padding: 16px; /* p-4 */
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1); /* shadow-lg */
          border-bottom-left-radius: 8px; /* rounded-b-lg */
          border-bottom-right-radius: 8px; /* rounded-b-lg */
        }

        .navbar-container {
          max-width: 1200px; /* container mx-auto */
          margin-left: auto;
          margin-right: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .navbar-brand {
          color: #ffffff; /* text-white */
          font-size: 30px; /* text-3xl */
          font-weight: 800; /* font-extrabold */
          letter-spacing: 0.05em; /* tracking-wide */
          text-decoration: none;
        }

        .navbar-mobile-button-wrapper {
          display: none; /* hidden by default */
        }

        @media (max-width: 767px) { /* md:hidden */
          .navbar-mobile-button-wrapper {
            display: block;
          }
          .navbar-desktop-menu {
            display: none; /* hidden on mobile */
          }
        }

        .navbar-mobile-button {
          color: #ffffff; /* text-white */
          outline: none; /* focus:outline-none */
          border: none;
          background: none;
          padding: 8px; /* p-2 */
          border-radius: 6px; /* rounded-md */
          cursor: pointer;
        }

        .navbar-mobile-button:focus {
          box-shadow: 0 0 0 2px #ffffff; /* focus:ring-2 focus:ring-white */
        }

        .navbar-mobile-icon {
          width: 32px; /* w-8 */
          height: 32px; /* h-8 */
        }

        .navbar-desktop-menu {
          display: flex;
          align-items: center;
          gap: 24px; /* space-x-6 */
        }

        .nav-link {
          color: #ffffff; /* text-white */
          font-size: 18px; /* text-lg */
          font-weight: 500; /* font-medium */
          text-decoration: none;
          padding: 8px 12px; /* px-3 py-2 */
          border-radius: 6px; /* rounded-md */
          transition: color 300ms ease-in-out; /* transition duration-300 ease-in-out */
        }

        .nav-link:hover {
          color: #bfdbfe; /* hover:text-blue-200 */
        }

        .mobile-nav-link {
          display: block;
          color: #ffffff; /* text-white */
          font-size: 18px; /* text-lg */
          font-weight: 500; /* font-medium */
          text-decoration: none;
          padding: 8px 16px; /* px-4 py-2 */
          border-radius: 6px; /* rounded-md */
          transition: background-color 300ms ease-in-out;
        }

        .mobile-nav-link:hover {
          background-color: #2563eb; /* hover:bg-blue-600 */
        }

        .dropdown-wrapper {
          position: relative;
        }

        .dropdown-button {
          color: #ffffff; /* text-white */
          font-size: 18px; /* text-lg */
          font-weight: 500; /* font-medium */
          border: none;
          background: none;
          cursor: pointer;
          padding: 8px 12px; /* px-3 py-2 */
          border-radius: 6px; /* rounded-md */
          display: flex;
          align-items: center;
          transition: color 300ms ease-in-out;
          outline: none; /* focus:outline-none */
        }

        .dropdown-button:hover {
          color: #bfdbfe; /* hover:text-blue-200 */
        }

        .dropdown-button:focus {
          box-shadow: 0 0 0 2px #ffffff; /* focus:ring-2 focus:ring-white */
        }

        .dropdown-icon {
          width: 16px; /* w-4 */
          height: 16px; /* h-4 */
          margin-left: 8px; /* ml-2 */
          transition: transform 300ms; /* transition-transform duration-300 */
        }

        .dropdown-icon.rotate-180 {
          transform: rotate(180deg);
        }

        .dropdown-menu {
          position: absolute;
          top: 100%; /* top-full */
          left: 0;
          margin-top: 8px; /* mt-2 */
          width: 192px; /* w-48 */
          background-color: #ffffff; /* bg-white */
          border-radius: 6px; /* rounded-md */
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1); /* shadow-xl */
          padding-top: 8px; /* py-2 */
          padding-bottom: 8px; /* py-2 */
          z-index: 10; /* z-10 */
        }

        .dropdown-item {
          display: block;
          padding: 8px 16px; /* px-4 py-2 */
          color: #374151; /* text-gray-800 */
          text-decoration: none;
          transition: background-color 200ms ease-in-out, color 200ms ease-in-out;
          border-radius: 6px; /* rounded-md */
        }

        .dropdown-item:hover {
          background-color: #f3f4f6; /* hover:bg-gray-100 */
          color: #2563eb; /* hover:text-blue-600 */
        }

        .navbar-mobile-menu {
          display: block; /* block on mobile */
          margin-top: 16px; /* mt-4 */
          background-color: #1d4ed8; /* bg-blue-700 */
          border-radius: 8px; /* rounded-lg */
          padding: 16px; /* p-4 */
          display: flex;
          flex-direction: column;
          gap: 8px; /* space-y-2 */
        }

        .mobile-dropdown-wrapper {
          position: relative;
        }

        .mobile-dropdown-button {
          width: 100%; /* w-full */
          text-align: left;
          color: #ffffff; /* text-white */
          font-size: 18px; /* text-lg */
          font-weight: 500; /* font-medium */
          border: none;
          background: none;
          cursor: pointer;
          padding: 8px 16px; /* px-4 py-2 */
          border-radius: 6px; /* rounded-md */
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: background-color 300ms ease-in-out;
          outline: none; /* focus:outline-none */
        }

        .mobile-dropdown-button:hover {
          background-color: #2563eb; /* hover:bg-blue-600 */
        }

        .mobile-dropdown-button:focus {
          box-shadow: 0 0 0 2px #ffffff; /* focus:ring-2 focus:ring-white */
        }

        .mobile-dropdown-menu {
          padding-left: 24px; /* pl-6 */
          margin-top: 8px; /* mt-2 */
          display: flex;
          flex-direction: column;
          gap: 4px; /* space-y-1 */
        }

        .mobile-dropdown-item {
          display: block;
          padding: 8px 16px; /* px-4 py-2 */
          color: #dbeafe; /* text-blue-100 */
          text-decoration: none;
          transition: background-color 200ms ease-in-out, color 200ms ease-in-out;
          border-radius: 6px; /* rounded-md */
        }

        .mobile-dropdown-item:hover {
          background-color: #3b82f6; /* hover:bg-blue-500 */
          color: #ffffff; /* hover:text-white */
        }
        `}
      </style>
    </nav>
  );
}

// Helper component for a simple navigation link (desktop)
function NavLink({ href, children }) {
  return (
    <a href={href} className="nav-link">
      {children}
    </a>
  );
}

// Helper component for a simple navigation link (mobile)
function MobileNavLink({ href, children }) {
  return (
    <a href={href} className="mobile-nav-link">
      {children}
    </a>
  );
}

// Helper component for a dropdown menu (desktop) - now uses hover
function Dropdown({ title, isOpen, onMouseEnter, onMouseLeave, items }) {
  return (
    <div
      className="dropdown-wrapper"
      onMouseEnter={onMouseEnter} // Open on mouse enter
      onMouseLeave={onMouseLeave} // Close on mouse leave
    >
      <button
        className="dropdown-button"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {title}
        <svg
          className={`dropdown-icon ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="dropdown-item"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

// Helper component for a dropdown menu (mobile) - still uses click
function MobileDropdown({ title, isOpen, toggle, items }) {
  return (
    <div className="mobile-dropdown-wrapper">
      <button
        onClick={toggle}
        className="mobile-dropdown-button"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {title}
        <svg
          className={`dropdown-icon ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="mobile-dropdown-menu">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="mobile-dropdown-item"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}