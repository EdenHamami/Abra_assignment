import React from 'react';
import "./PetCard.css";

function PetCard({ pet }) {
  const color=pet.color;
  return (
<div className='pet-card'>
<div className='pet-name'><b>Name: </b>{pet.name}</div>
<div className='pet-color' style={{backgroundColor:color}}>color</div>
<div className='pet-type'><b>Type: </b> {pet.type}</div>
<div className='pet-age'><b>Age: </b>{pet.age}</div>


</div>

  );
}

export default PetCard;
