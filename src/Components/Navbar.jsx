import React, { useState } from 'react';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
          Personal Notes
        </span>
        <div className='flex md:order-2'>
          <button
            type='button'
            className='md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1'
            onClick={() => setNavbarOpen(true)}
          >
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'></path>
            </svg>
          </button>

          <div className='relative hidden md:block '>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <svg
                className='w-5 h-5 text-gray-500'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'></path>
              </svg>
            </div>
            <input
              type='text'
              id='search-navbar'
              className='block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Search...'
            />
          </div>
        </div>
        {navbarOpen && (
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50'>
            <div className='dark:bg-gray-900 rounded-lg px-4 py-6 w-full mx-6'>
              <form>
                <div className='mb-4'>
                  <label
                    htmlFor='query'
                    className='block text-white font-bold mb-2'
                  >
                    Search
                  </label>
                  <input
                    type='text'
                    id='query'
                    className='w-full border px-2 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
                    placeholder='Cari Catatan Anda...'
                  />
                </div>
                <div className='flex justify-end'>
                  <button
                    type='button'
                    className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg mr-2'
                    onClick={() => setNavbarOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type='submit'
                    className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg'
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
