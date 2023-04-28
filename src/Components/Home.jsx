import React from 'react';
import Axios from 'axios';
import CardNotes from './CardNotes';

class Home extends React.Component {
  state = {
    notes: [],
  };

  componentDidMount() {
    Axios.get('http://localhost:3004/posts').then((result) => {
      this.setState({
        notes: result.data,
      });
    });
  }

  render() {
    return (
      <div>
        <h1 className='font-bold text-gray-900 text-2xl flex justify-center'>
          Catatan Anda
        </h1>
        <div className='flex justify-center'>
          <div className='lg:grid lg:grid-cols-3 lg:gap-5 mx-5 mb-5'>
            {this.state.notes.map((Notes) => {
              return (
                <CardNotes
                  key={Notes.id}
                  title={Notes.title}
                  body={Notes.body}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
