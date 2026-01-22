import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation({ menuItems }) {
  return (
    <nav className="nav">
      <ul>
        {menuItems.length > 0 ? (
          menuItems.map((item) => (
            <li key={item.id}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))
        ) : (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
