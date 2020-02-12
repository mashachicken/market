import React from 'react';
import Day from './Day';
import marketSchedule from './schedule'

function Calendar() {

  return (
    <div>
      <style jsx>{`
      .cal {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-column-gap: 10px;
        grid-row-gap: 10px;
      }
      @media (max-width: 1200px) {
        .cal {
          grid-template-columns: 1fr 1fr 1fr;
        }
      }
      @media (max-width: 550px) {
        .cal {
          grid-template-columns: 1fr 1fr;
      }

      @media (max-width: 360px) {
        .cal {
          grid-template-columns: 1fr;
        }
      }
        `}</style>
      <div className='cal'>
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
    </div>
    );
  }

  export default Calendar;
