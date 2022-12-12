import React, { useId } from 'react';
import { useSelector } from 'react-redux';

const Weekdays = () => {
  const id = useId();
  const weekdays = useSelector((item) => item.calendar.weekdays);

  return (
    <>
      <ul className='weekdays-menus'>
        {weekdays.map((item) => {
          return <li key={`${id}-${item}`}>{item}</li>;
        })}
      </ul>
    </>
  );
};

export default Weekdays;
