/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actionTypes/actionTypes';
import { generateListsOfMonthDays } from '../helpers/generateDates';
import { useHistory } from 'react-router-dom';

const Monthdays = () => {
  const history = useHistory();
  const id = useId();

  const calendar = useSelector((item) => item.calendar);
  const dispatch = useDispatch();

  const { display_year, display_month } = calendar;
  const { current_year, current_month, current_date } =
    calendar.current_full_date;

  const onGetFullDate = (selected_date_info) => {
    let { year, month, date } = selected_date_info;

    // UPDATE MONTH(calendar.display_month) IF USER CLICK DATE OUTSIDE OF THE CURRENT MONTH
    // IF USER CLICK DATE INSIDE OF THE CURRENT MONTH(calendar.display_month) DO NOT UPDATE THE MONTH
    dispatch({
      type: actions.UPDATE_YEAR_MONTH_DATE,
      payload: { year, month, date },
    });

    // go to /calendar/:year/:month/:date
    // if user click a date inside calendar
    history.push({
      pathname: `/calendar/${year}/${month}/${date}`,
    });
  };

  useEffect(() => {
    // for lists days of the displayed month
    const lists = generateListsOfMonthDays(display_year, display_month);

    dispatch({ type: actions.GET_DISPLAYED_MONTH_DAYS, payload: lists });
  }, [display_month]);

  return (
    <ul className='month-days-menus'>
      {calendar.display_monthdays.map((item, index) => {
        let { year, month, date } = item;
        return (
          <li
            className={`${
              display_month === month ? 'text-color-500' : 'text-color-light'
            } ${`${
              current_year === year &&
              current_month === month &&
              current_date === date
                ? 'text-current-date'
                : 'text-not-current-date'
            }`}`}
            key={`${id}-${index}`}
            onClick={onGetFullDate.bind(this, item)}
          >
            {date}
          </li>
        );
      })}
    </ul>
  );
};

export default Monthdays;
