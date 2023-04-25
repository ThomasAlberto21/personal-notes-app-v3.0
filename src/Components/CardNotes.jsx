import React from 'react';

export default function CardNotes(props) {
  return (
    <div className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900'>
      <h5 className='mb-2 text-2xl font-bold tracking-normal text-gray-900 dark:text-white '>
        {props.title}
      </h5>
      <p className='font-normal text-gray-700 dark:text-gray-400'>
        {props.body.substring(0, 100) + '...'}
      </p>
    </div>
  );
}
