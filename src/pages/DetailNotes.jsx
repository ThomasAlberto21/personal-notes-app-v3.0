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
      <div className='p-20'>
        <h1>Detail Notes</h1>
        <p>{this.state.notes.title}</p>
        <p>{this.state.notes.body}</p>
      </div>
    );
  }
}

export default DetailNotesWrapper;
