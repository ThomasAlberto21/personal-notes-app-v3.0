import React from 'react';
import CardNotes from './CardNotes';

class Home extends React.Component {
  render() {
    return (
      <div className='px-10'>
        <h1 className='font-bold text-gray-900 text-2xl'>Catatan Anda</h1>
        <CardNotes />
      </div>
    );
  }
}

export default Home;
