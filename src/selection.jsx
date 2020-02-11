import React from 'react';

function Selection(props) {
  const selectionStyle = {
    'background': 'radial-gradient(#9e8123, #ffffff, #66ff00, #9e8123, #9e8123, #9e8123, #ffffff, #000000, #ffffff, #fbff00, #ff00bb, #ffffff, #66ff00, #9e8123, #fbff00, #ff00bb, #ffffff, #66ff00, #9e8123, #9e8123)',
    'filter':'drop-shadow(30px 10px 4px #4444dd)'
  }
return (
  <div style={selectionStyle}>
    <marquee><blink>{props.name}</blink></marquee>
  </div>
);
}



export default Selection;
