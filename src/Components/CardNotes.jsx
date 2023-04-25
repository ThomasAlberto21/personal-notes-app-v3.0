import React from 'react';

export default function CardNotes() {
  return (
    <div>
      <div className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900'>
        <h5 className='mb-2 text-2xl font-bold tracking-normal text-gray-900 dark:text-white '>
          Noteworthy technology acquisitions 2021
        </h5>
        <p className='font-normal text-gray-700 dark:text-gray-400'>
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </div>
  );
}
