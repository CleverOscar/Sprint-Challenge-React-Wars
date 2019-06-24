import React from 'react';
import './StarWars.css';


const Characters = props => {
  return (
    <div className="character">
      <p>Name: {props.item.name}</p>
      <p>Height: {props.item.height}</p>
      <p>Gender: {props.item.gender}</p>
      <p>Mass: {props.item.mass}</p>
    </div>
  );
}

export default Characters;
