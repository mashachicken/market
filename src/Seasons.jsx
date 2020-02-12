import React from 'react';
import Season from './Season';
import { spring, summer, fall, winter } from './produce'


function Seasons() {

  return (
    <div className="seas">
      <style jsx>{`
      .seas {
        display: grid;
        grid-template-columns: 1fr 1fr;

      }
      `}
      </style>
      <Season
        name='Spring'
        months={spring}
      />



    <Season
      name='Summer'
      months={summer}
      />


    <Season
      name='Fall'
      months={fall}
      />



    <Season
      name='Winter'
      months={winter}
      />

    </div>
  );
}

export default Seasons;
