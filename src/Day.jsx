import React from 'react';

function Day(props) {
  const dayStyle = {
    padding: '10px'
  };
  return (
    <div className='card bg-info' style={dayStyle}>
      <h5>{props.day}</h5>
      <p>Location: {props.location}</p>
      <p>{props.hours}</p>
      <p>Booth: {props.booth}</p>
    </div>
  );
}

export default Day;
