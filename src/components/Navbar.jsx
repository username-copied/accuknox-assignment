// Navbar.js
import React from 'react';
import './navbar.css'; // Import the CSS file
import { SlMagnifier } from "react-icons/sl";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import "./dashboard.css";


const Navbar = () => {
    return (
      <nav className="navbar">
        <ul className="nav-links">
          <li className="home-link">
            <span className="Home">Home &gt; </span>
            <span className="dash">Dashboard V2</span>
          </li>
          <li className="search-bar">
            <span className="search">
              <SlMagnifier />
            </span>
            <input
              className="searchBox"
              type="text"
              placeholder="Search anything"
            />
          </li>
          <li className="dropdown">
            <select id="services" className="dropdown-select">
              <option value="web-development">Web Development</option>
              <option value="app-development">App Development</option>
              <option value="seo">SEO</option>
            </select>
          </li>
          <li className="profile-logo">
            <span>
              <MdOutlineNotificationsActive />
            </span>
          </li>
          <li>
            <span className="profile">
              <CgProfile />
              User Profile
            </span>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar;
