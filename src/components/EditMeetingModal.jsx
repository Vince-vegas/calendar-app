import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actionTypes/actionTypes';

const EditMeetingModal = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  const calendar = useSelector((item) => item.calendar);
  const openModal = useSelector((item) => item.meetings.openModal);

  const dispatch = useDispatch();

  let { display_year, display_month, display_date } = calendar;

  const ref = useRef(null);

  const handleInput = (e) => {
    setTitle(e.target.value);
  };

  const handleTextarea = (e) => {
    setDescription(e.target.value);
  };

  const handleSelection = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(title);

    if (title.length === 0) return;

    setTitle('');
    setDescription('');
    setStatus('pending');
  };

  const onCloseModal = () => {
    dispatch({ type: actions.TOGGLE_MEETING_MODAL });
  };

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div className={`modal-container ${openModal ? 'd-block' : 'd-none'}`}>
      <div className='modal-holder'>
        <div className='exit-modal'>
          <button onClick={onCloseModal}>exit-modal</button>
        </div>

        <h3 className='date'>
          {calendar.months[display_month]} {display_date}, {display_year}
        </h3>

        <form className='add-meeting-form' onSubmit={handleSubmit}>
          <div className='form-item'>
            <h4>Title</h4>
            <input
              type='text'
              name='title'
              ref={ref}
              placeholder='Enter Title'
              value={title}
              onChange={handleInput}
            />
          </div>

          <div className='form-item'>
            <h4>Description</h4>
            <textarea
              name='description'
              placeholder='Add Description'
              value={description}
              onChange={handleTextarea}
            ></textarea>
          </div>

          <div className='form-item'>
            <select name='select' value={status} onChange={handleSelection}>
              <option value='pending'>Pending</option>
              <option value='on-going'>On-going</option>
              <option value='done'>Done</option>
            </select>
          </div>

          <button className='btn-submit' type='submit'>
            Save Meeting
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditMeetingModal;
