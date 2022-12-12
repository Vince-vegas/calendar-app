/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actionTypes/actionTypes';

const SortMeetingsButtons = () => {
  const meetings = useSelector((item) => item.meetings);
  const dispatch = useDispatch();

  let { scheduled_meetings, current_sorting_category } = meetings;

  useEffect(() => {
    if (current_sorting_category === 'all') {
      let lists = scheduled_meetings.sort(
        (a, b) => a.total_seconds - b.total_seconds
      );

      dispatch({
        type: actions.SET_SORTING_TO_ALL,
        payload: lists,
      });
      return;
    }
    dispatch({ type: actions.START_SORTING_MEETINGS });
  }, [current_sorting_category, scheduled_meetings]);

  const onSortAll = () => {
    let lists = scheduled_meetings.sort(
      (a, b) => a.total_seconds - b.total_seconds
    );

    dispatch({
      type: actions.SET_SORTING_TO_ALL,
      payload: lists,
    });
  };

  const onSortPending = () => {
    dispatch({
      type: actions.SET_SORTING_CATEGORY,
      payload: 'pending',
    });
  };
  const onSortOnGoing = () => {
    dispatch({
      type: actions.SET_SORTING_CATEGORY,
      payload: 'on-going',
    });
  };
  const onSortDone = () => {
    dispatch({
      type: actions.SET_SORTING_CATEGORY,
      payload: 'done',
    });
  };

  return (
    <div className='btn-sort-holder'>
      <button className='btn-sort' onClick={onSortAll}>
        All
      </button>
      <button className='btn-sort' onClick={onSortPending}>
        Pending
      </button>
      <button className='btn-sort' onClick={onSortOnGoing}>
        On-going
      </button>
      <button className='btn-sort' onClick={onSortDone}>
        Done
      </button>
    </div>
  );
};

export default SortMeetingsButtons;
