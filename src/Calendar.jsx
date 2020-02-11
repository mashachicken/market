import React from 'react';
import Day from './Day';
import marketSchedule from './schedule'

function Calendar() {
  return (
    <div>
      {marketSchedule.map((thisDay, index) => (
        <Day
          day={thisDay.day}
          location={thisDay.location}
          hours={thisDay.hours}
          booth={thisDay.booth}
          key={index}
          />
      ))}
    </div>
  );
}

export default Calendar;
