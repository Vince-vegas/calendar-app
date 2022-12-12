import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actionTypes/actionTypes';

const CalendarHeader = () => {
  const calendar = useSelector((item) => item.calendar);
  const dispatch = useDispatch();

  const onPrevMonth = () => {
    if (calendar.display_month === 0) {
      dispatch({ type: actions.GET_PREVIOUS_YEAR });
      return;
    }
    dispatch({ type: actions.GET_PREVIOUS_MONTH });
  };

  const onNextMonth = () => {
    if (calendar.display_month === 11) {
      dispatch({ type: actions.GET_NEXT_YEAR });
      return;
    }
    dispatch({ type: actions.GET_NEXT_MONTH });
  };

  return (
    <div className='calendar-header'>
      <h1>
        {calendar.months[calendar.display_month]} {calendar.display_year}
      </h1>
      <button className='btn-arrow btn-left' onClick={onPrevMonth}>
        <svg
          className='calendar-arrows'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
        >
          <g fill='#111'>
            <path d='M12 20c.8-.8.8-2.1 0-2.8L8.9 14H20c1.1 0 2-.9 2-2s-.9-2-2-2H8.9L12 6.8c.8-.8.8-2.1 0-2.8-.8-.8-2-.8-2.8 0l-6.6 6.6c-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4L9.2 20c.7.8 2 .8 2.8 0z'></path>
          </g>
        </svg>
      </button>
      <button className='btn-arrow btn-right' onClick={onNextMonth}>
        <svg
          className='calendar-arrows'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
        >
          <g fill='#111'>
            <path d='M12 4c-.8.8-.8 2.1 0 2.8l3.2 3.2H4c-1.1 0-2 .9-2 2s.9 2 2 2h11.2L12 17.2c-.8.8-.8 2.1 0 2.8.8.8 2 .8 2.8 0l6.6-6.6c.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4L14.8 4c-.7-.8-2-.8-2.8 0z'></path>
          </g>
        </svg>
      </button>
    </div>
  );
};

export default CalendarHeader;
