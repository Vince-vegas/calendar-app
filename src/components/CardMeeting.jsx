import React from 'react';

const CardMeeting = ({
  title,
  description,
  onDeleteMeeting,
  year,
  month,
  date,
  status,
  onOpenModal,
}) => {
  return (
    <div className='card-meeting'>
      <span>Status {status}</span>
      <h1 className='title-date'>
        {month} {date}, {year}
      </h1>
      <h1>Title: {title}</h1>
      <p>Description: {description}</p>

      <button onClick={onOpenModal} className='btn-edit'>
        Edit
      </button>
      <button onClick={onDeleteMeeting}>Delete</button>
    </div>
  );
};

export default CardMeeting;
