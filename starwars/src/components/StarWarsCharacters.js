import React from 'react';
import './StarWars.css';
import Characters from './Characters';

const StarWarsCharacters = props => {
  return (
    <div className="characterList">
      {props.starwarsChars.map((item,index) => (
        <Characters key={item} item={item} />
      ))}
    </div>
  );
}


export default StarWarsCharacters;
