
import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav({ dogs }) {
  return (
    <nav>
      <NavLink exact to="/dogs">Home</NavLink>
      {dogs.map(dog => (
        <NavLink key={dog} to={`/dogs/${dog.toLowerCase()}`}>{dog}</NavLink>
      ))}
    </nav>
  );
}

export default Nav;
