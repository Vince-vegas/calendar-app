/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actionTypes/actionTypes';
import CardMeeting from './CardMeeting';
import SortMeetingsButtons from './SortMeetingsButtons';

const Meetings = () => {
  const calendarMonths = useSelector((item) => item.calendar.months);
  const meetings = useSelector((item) => item.meetings);
  const dispatch = useDispatch();

  let { current_sorted } = meetings;

  const onOpenModal = () => {
    dispatch({ type: actions.TOGGLE_MEETING_MODAL });
  };

  const onDeleteCard = (id) => {
    fetch(`http://localhost:3500/meetings/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: actions.DELETE_MEETING, payload: { id } });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='meetings-container'>
      <h1 className='w-16'>Meetings</h1>

      <SortMeetingsButtons />
      <div className='meeting-row'>
        {current_sorted.length === 0 && (
          <div>
            <h1>No Meetings</h1>
          </div>
        )}

        {current_sorted.length > 0 &&
          current_sorted.map((item) => {
            return (
              <CardMeeting
                key={item.id}
                title={item.title}
                description={item.description}
                year={item.year}
                month={calendarMonths[item.month]}
                date={item.date}
                status={item.status}
                onDeleteMeeting={onDeleteCard.bind(this, item.id)}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Meetings;
