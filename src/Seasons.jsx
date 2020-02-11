import React from 'react';
import Season from './Season';
import { spring, summer, fall, winter } from './produce'



function Seasons() {
  return (
    <div>
      <marquee><Season
        name='Spring'
        months={spring}
      />
  </marquee>
  <marquee>
  <marquee>
    <Season
      name='Summer'
      months={summer}
      />
  </marquee>
  <marquee>
    <Season
      name='Fall'
      months={fall}
      />
  </marquee>
</marquee>
  <marquee>
    <Season
      name='Winter'
      months={winter}
      />
  </marquee>
    </div>
  );
}

export default Seasons;
