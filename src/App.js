import React from 'react';
import Navbar from './Components/Navbar';
import CardNotes from './Components/CardNotes';

export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='px-10'>
        <h1 className='font-bold text-gray-900'>Catatan Anda</h1>
        <CardNotes />
      </div>
    </div>
  );
}
