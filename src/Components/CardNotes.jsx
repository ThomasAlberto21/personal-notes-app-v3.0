import React from 'react';

export default function CardNotes(props) {
  return (
    <div className='block max-w-sm px-6 pb-20 pt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 lg:mb-0 my-5 relative'>
      <h5 className='mb-2 text-2xl font-bold tracking-normal text-gray-900 dark:text-white '>
        {props.title}
      </h5>
      <p className='font-normal text-gray-700 dark:text-gray-400 mt-5'>
        {props.body}
      </p>
      <button
        className='bg-red-500 text-white px-3 py-2 my-4 rounded-md bottom-0 absolute font-semibold'
        onClick={props.onClick}
      >
        Remove
      </button>
    </div>
  );
}
