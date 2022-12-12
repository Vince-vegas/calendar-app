import React, { useState, useEffect, useRef } from 'react';

const EditMeetingModal = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

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

  useEffect(() => {
    console.log(1);
  }, []);

  return (
    <div className='modal-container'>
      <div className='add-meeting-holder'>
        <div className='exit-modal'>
          <button>exit-modal</button>
        </div>
        <form className='add-meeting-form' onSubmit={handleSubmit}>
          <div className='form-item'>
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
            <textarea
              name='description'
              id=''
              cols='30'
              rows='10'
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

          <button type='submit'>Save Meeting</button>
        </form>
      </div>
    </div>
  );
};

export default EditMeetingModal;
