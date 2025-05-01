import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/fc-barcelona.svg';

function Header(props) {
  const navLinkStyle = ({ isActive }) =>
    `hover:text-red-600 transition-colors duration-200 ${
      isActive ? 'text-red-600 font-semibold border-b-2 border-blue-600' : 'text-white'
    }`;

  return (
    <header className="fixed top-0 left-0 w-full mt-3 bg-blue-900 text-white h-16 md:h-20 z-50 shadow-lg">
      <div className="container mx-auto px-4 h-full">
        <nav className="flex justify-between items-center h-full">
          {/* Logo and Title */}
          <NavLink
            to="/"
            className="flex items-center hover:text-red-600 transition-colors duration-200"
          >
            <img
              src={logo}
              alt="FCB Logo"
              className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 -mt-2 md:-mt-4 -mb-2 md:-mb-4"
            />
            <div className="ml-2 text-sm md:text-lg lg:text-xl font-bold whitespace-nowrap">
              {props.title}
            </div>
          </NavLink>

          {/* Navigation Links */}
          <ul className="flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 text-sm md:text-base lg:text-lg font-bold">
            <li>
              <NavLink to="/about" className={navLinkStyle}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/player" className={navLinkStyle}>
                Player
              </NavLink>
            </li>
            <li>
              <NavLink to="/trophy" className={navLinkStyle}>
                Trophy
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;