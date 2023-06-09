import React from 'react';
import Navbar from './Components/Navbar';
import HomeWrapper from './pages/Home';
import DetailNotesWrapper from './pages/DetailNotes';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomeWrapper />} />
        <Route path='/detail_notes/:id' element={<DetailNotesWrapper />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}
