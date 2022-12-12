/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from 'react';
import Calendar from '../components/Calendar';
import { useHistory, useRouteMatch } from 'react-router-dom';
import AddMeetingModal from '../components/AddMeetingModal';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import * as actions from '../store/actionTypes/actionTypes';
import Meetings from '../components/Meetings';

const CalendarPage = () => {
  let { data } = useFetch('http://localhost:3500/meetings');
  const history = useHistory();
  const match = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!match.isExact) {
      return history.replace({ pathname: '/calendar' });
    }
  }, []);

  useEffect(() => {
    if (data === null) return;
    dispatch({ type: actions.GET_MEETINGS, payload: data });
  }, [data]);

  return (
    <Fragment>
      <AddMeetingModal />
      <Calendar />
      <Meetings />
    </Fragment>
  );
};

export default CalendarPage;
