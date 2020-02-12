import React from 'react';

function Selection(props) {
  const selectionStyle = {
    // 'filter':'drop-shadow(30px 10px 4px #4444dd)'
    display: 'inline'
  }
return (
  <div style={selectionStyle}>
    - {props.name} -
  </div>
);
}



export default Selection;
