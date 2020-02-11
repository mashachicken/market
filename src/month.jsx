import React from 'react';
import Selection from './selection';


function Month(props) {
  const makeSelection = () => {
    const selectionArr = props.selection.map((selection, index) =>
    <Selection name={selection}
      key={index}/>
  )
  return selectionArr;
}
const monthStyle = {
  'display': 'grid',
  'gridTemplateColumns': '1fr 1fr',
  'background': 'radial-gradient(#ff00bb, #ffffff, #66ff00, #ffffff, #fbff00, #ff00bb, #ffffff, #66ff00, #ffffff, #fbff00, #ff00bb, #ffffff, #66ff00, #ffffff, #fbff00, #ff00bb, #ffffff, #66ff00, #ffffff, #fbff00)'
}
return (
  <div style={monthStyle}>
    <h1><strong><ul><em>{props.name}</em></ul></strong></h1>
    {makeSelection()}
  </div>
);
}



export default Month;
