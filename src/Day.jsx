import React from 'react';

function Day(props) {
  return (
    <div>
      <h3>{props.day}</h3>
      <h4>Location: {props.location}</h4>
      <h4>{props.hours}</h4>
      <h4>Booth: {props.booth}</h4>
    </div>
  );
}

export default Day;
