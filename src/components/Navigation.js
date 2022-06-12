import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/gadget">Gadget</NavLink></li>
        <li><NavLink to="/beach">Beaches</NavLink></li>
        <li><NavLink to="/animal">Animals</NavLink></li>
        <li><NavLink to="/food">Food</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
