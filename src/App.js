import React from 'react';
import Navbar from './Components/Navbar';
import CardTodos from './Components/CardTodos';

export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='px-10'>
        <h1 className='font-bold text-gray-900'>Catatan Anda</h1>
        <CardTodos />
      </div>
    </div>
  );
}
