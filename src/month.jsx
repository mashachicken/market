import React from 'react';
import Selection from './selection';
import { Link } from 'react-router-dom';


function Month(props) {
  const makeSelection = () => {
    const selectionArr = props.selection.map((selection, index) =>
    <Selection name={selection}
      key={index}/>
  )
  return selectionArr;
}
const monthStyle = {
  // 'display': 'grid',
  // 'gridTemplateColumns': '1fr 1fr'
}
return (
  <div style={monthStyle}>
    <h1>{props.name}</h1>
  <Link to="/{props.name}"></Link>
  </div>
);
}



export default Month;
