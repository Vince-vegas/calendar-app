/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { generateCurrentDate } from '../helpers/generateDates';
import * as actions from '../store/actionTypes/actionTypes';
import CalendarHeader from './CalendarHeader';
import Monthdays from './Monthdays';
import Weekdays from './Weekdays';

const Calendar = () => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const currentDate = generateCurrentDate();

    // for current date
    dispatch({ type: actions.GET_CURRENT_DATE, payload: currentDate });

    let paramsLength = Object.keys(params).length;
    // if params exist
    // if params /:year/:month/:day matched from the url
    if (paramsLength === 3) {
      let toNumberYear = parseInt(params.year);
      let toNumberMonth = parseInt(params.month);
      let toNumberDate = parseInt(params.date);

      dispatch({
        type: actions.UPDATE_YEAR_MONTH_DATE,
        payload: {
          year: toNumberYear,
          month: toNumberMonth,
          date: toNumberDate,
        },
      });
    }
  }, []);

  const onOpenModal = () => {
    dispatch({ type: actions.TOGGLE_MEETING_MODAL });
  };

  return (
    <div className='calendar-container'>
      <button className='btn-add' onClick={onOpenModal}>
        Add Meeting
      </button>
      <div className='calendar'>
        <CalendarHeader />
        <Weekdays />
        <Monthdays />
      </div>
    </div>
  );
};

export default Calendar;
