import React from 'react';
import Home from './pages/Home';
import Navbar from './Components/Navbar';
import DetailNotes from './pages/DetailNotes';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail_notes/:id' element={<DetailNotes />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}
