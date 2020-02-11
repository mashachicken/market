import React from 'react';
import Month from './month';

function Season(props) {
  const makeMonths = () => {
    const monthArr = props.months.map((month, index) =>
    <Month name={month.month}
      selection={month.selection}
      key={index} />
  )
  return monthArr;
}
return (
  <div>
    {makeMonths()}
  </div>
);
}



export default Season;
