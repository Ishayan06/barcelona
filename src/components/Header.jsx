import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/fc-barcelona.svg';

function Header(props) {
  const navLinkStyle = ({ isActive }) =>
    `hover:text-red-600 transition-colors duration-200 ${
      isActive ? 'text-red-600 font-semibold border-b-2 border-blue-600' : 'text-white'
    }`;

  return (
    <header className="fixed top-6 left-0 w-full bg-blue-900 text-white h-20 z-50 shadow-lg">
  <nav className="flex justify-between items-center px-4 py-2 h-full">
    <NavLink
      to="/"
      className="flex items-center relative hover:text-red-600 transition-colors duration-200"
    >
      <img
        src={logo}
        alt="FCB Logo"
        className="w-36 h-32 -mt-6 -mb-6 z-20"
      />
      <div className="ml-4 text-xl font-bold">{props.title}</div>
    </NavLink>

    <ul className="flex space-x-20 text-xl font-bold mr-10 list-none">
      <li><NavLink to="/about" className={navLinkStyle}>About</NavLink></li>
      <li><NavLink to="/player" className={navLinkStyle}>Player</NavLink></li>
      <li><NavLink to="/trophy" className={navLinkStyle}>Trophy</NavLink></li>
    </ul>
  </nav>
</header>

  );
}

export default Header;
