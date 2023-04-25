import React from 'react';
import CardNotes from './CardNotes';
import Axios from 'axios';

class Home extends React.Component {
  state = {
    notes: [],
  };

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      this.setState({
        notes: res.data,
      });
    });
  }

  render() {
    return (
      <>
        <h1 className='font-bold text-gray-900 text-2xl flex justify-center'>
          Catatan Anda
        </h1>
        <div className='flex justify-center'>
          <div className='lg:grid lg:grid-cols-3 lg:gap-6 '>
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
      </>
    );
  }
}

export default Home;
