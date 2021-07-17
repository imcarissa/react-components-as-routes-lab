import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <Navlink to="/">Home</Navlink>
      <Navlink to="/movies">Movies</Navlink>
      <Navlink to="/directors">Directors</Navlink>
      <Navlink to="/actors">Actors</Navlink>
    </div>
  );
};

export default NavBar;
