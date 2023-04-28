import React from 'react';
import Axios from 'axios';
import CardNotes from './CardNotes';

class Home extends React.Component {
  state = {
    notes: [],
  };

  // fungsi get(fungsi yang digunakan untuk mengambil data)
  getNotesToAPI = () => {
    Axios.get('http://localhost:3004/notes').then((result) => {
      this.setState({
        notes: result.data, // memasukkan data ke dalam array notes
      });
    });
  };

  // Fungsi hapus data
  handleRemoveData = (data) => {
    Axios.delete(`http://localhost:3004/notes/${data}`).then((result) => {
      this.getNotesToAPI(); // memanggil fungsi get ketika berhasil remove data
    });
  };

  componentDidMount() {
    this.getNotesToAPI(); // memnggil fungsi get untuk ditampilkan ke browser
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
                  key={Notes.id} // KEY UNIQUE
                  data={Notes} // PROPS DATA NOTES (title , body , id)
                  remove={this.handleRemoveData} // PROPS REMOVE DATA
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
