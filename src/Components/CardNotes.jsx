import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export default function CardNotes(props) {
  return (
    <div className='w-full mx-10 h-96 px-6 py-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 lg:mb-0 my-5 flex flex-col justify-end'>
      <div className='mb-5'>
        <h5 className='mb-2 text-2xl font-bold tracking-normal text-gray-900 dark:text-white cursor-pointer'>
          {props.data.title}
        </h5>
        <p className='font-normal text-gray-700 dark:text-gray-400 mt-5'>
          {props.data.body}
        </p>
      </div>
      <div className='mt-auto'>
        <button
          className='bg-green-500 text-white w-full rounded-md bottom-0 py-3 font-semibold  '
          onClick={() => props.update(props.data)}
        >
          Update
        </button>
        <button
          className='bg-red-500 text-white px-3 w-full rounded-md right-0 bottom-0 py-3 font-semibold mt-3'
          onClick={() => props.remove(props.data.id)}
        >
          Remove
        </button>
        <Link to={`/detail_notes/${props.data.id}`}>
          <button className='bg-blue-500 text-white px-3 w-full rounded-md right-0 bottom-0 py-3 font-semibold mt-3'>
            Baca Lagi
          </button>
        </Link>
      </div>
    </div>
  );
}
