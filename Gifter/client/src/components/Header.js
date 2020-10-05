import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-info">
      <NavLink to="/" className="navbar-brand" activeClassName="selected">
        GiFTER
      </NavLink>
      <ul className="navbar-nava mr-auto">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" activeClassName="selected">
            Feed
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/posts/add"
            className="nav-link"
            activeClassName="selected"
          >
            New Post
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            id="NavLink__SearchPosts"
            to="/posts/search"
            className="nav-link"
            activeClassName="selected"
          >
            Search Posts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
