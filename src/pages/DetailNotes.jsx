import React from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

const DetailNotesWrapper = () => {
  const { id } = useParams();
  return <DetailNotes id={id} />;
};

class DetailNotes extends React.Component {
  state = {
    notes: {
      title: '',
      body: '',
    },
  };

  componentDidMount() {
    const { id } = this.props;
    Axios.get(`http://localhost:3004/notes/${id}`).then((result) => {
      let notes = result.data;
      this.setState({
        notes: {
          title: notes.title,
          body: notes.body,
        },
      });
    });
  }

  render() {
    return (
      <div className='px-10 mt-16'>
        <h1 className='font-bold text-gray-900 text-4xl'>
          {this.state.notes.title}
        </h1>
        <p className='font-normal mt-5'>{this.state.notes.body}</p>
      </div>
    );
  }
}

export default DetailNotesWrapper;
