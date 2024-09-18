
import React from 'react';
import { Link } from 'react-router-dom';

function DogList({ dogs }) {
  return (
    <div>
      <h1>Meet Our Dogs</h1>
      <div>
        {dogs.map(dog => (
          <div key={dog.name}>
            <h2>
              <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
            </h2>
            <img src={dog.src} alt={dog.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogList;
