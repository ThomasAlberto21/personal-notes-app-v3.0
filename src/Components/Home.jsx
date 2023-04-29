import React from 'react';
import Axios from 'axios';
import CardNotes from './CardNotes';

class Home extends React.Component {
  state = {
    notes: [],
    formNotes: {
      userId: 1,
      id: '',
      title: '',
      body: '',
    },
  };

  // fungsi GET (fungsi yang digunakan untuk mengambil data)
  getNotesToAPI = () => {
    Axios.get('http://localhost:3004/notes').then((result) => {
      this.setState({
        notes: result.data, // memasukkan data ke dalam array notes
      });
    });
  };

  // Fungsi DELETE (fungsi yang digunakan untuk menghapus data)
  handleRemoveData = (data) => {
    Axios.delete(`http://localhost:3004/notes/${data}`).then((result) => {
      this.getNotesToAPI(); // memanggil fungsi get ketika berhasil remove data
    });
  };

  handleFormNotesChange = (e) => {
    let formNotesNew = { ...this.state.formNotes }; //  mengekstrak nilai-nilai dari sebuah array atau objek
    formNotesNew[e.target.name] = e.target.value; // 
    this.setState(
      {
        formNotes: formNotesNew,
      },
      () => console.log(this.state.formNotes)
    );
  };

  componentDidMount() {
    this.getNotesToAPI(); // memnggil fungsi get untuk ditampilkan ke browser
  }

  render() {
    return (
      <div>
        <form className='bg-gray-900 lg:w-2/4 md:w-2/3 p-7 lg:m-auto md:m-auto lg:my-7 md:my-7 mx-5 my-5 rounded-lg '>
          <div className='mb-6'>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Your Title
            </label>
            <input
              name='title'
              type='text'
              id='title'
              className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Input Your Tittle....'
              onChange={this.handleFormNotesChange}
            />
          </div>
          <div className='mb-6'>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Your Notes
            </label>
            <textarea
              name='body'
              type='text'
              id='body'
              rows={10}
              className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Input Your Notes....'
              onChange={this.handleFormNotesChange}
            />
          </div>
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Submit
          </button>
        </form>
        <h1 className='font-bold text-gray-900 text-2xl flex justify-center mt-20'>
          Your Notes
        </h1>

        <div className='flex justify-center'>
          <div className='lg:grid lg:grid-cols-3 md:flex  lg:gap-5 mx-5 mb-5'>
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
