import React from 'react';
import Axios from 'axios';
import CardNotes from './CardNotes';
import { toast } from 'react-toastify';

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

  // GET (fungsi yang digunakan untuk mengambil data)
  getNotesToAPI = () => {
    Axios.get('http://localhost:3004/notes?_sort=id&_order=desc').then(
      (result) => {
        this.setState({
          notes: result.data, // memasukkan data ke dalam array notes
        });
      }
    );
  };

  // DELETE (fungsi yang digunakan untuk menghapus data)
  handleRemoveData = (data) => {
    Axios.delete(`http://localhost:3004/notes/${data}`).then((result) => {
      toast.success('Note Success Delete', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      this.getNotesToAPI(); // memanggil fungsi GET ketika berhasil remove data
    });
  };

  // POST (Fungsi yang digunakan untuk mengirim data)
  postNotesToAPI = () => {
    Axios.post('http://localhost:3004/notes', this.state.formNotes).then(
      (result) => {
        toast.success('Added Note Success', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
        this.getNotesToAPI(); // memanggil fungsi GET ketika berhasil menambahkan data
      }
    );
  };

  // PUT (Fungsi yang digunakan untuk mengudate data)
  handleUpdateData = (data) => {
    this.setState({
      formNotes: data // merubah state formNtes
    });
    // Axios.put(`http://localhost:3004/notes/${data}`, this.state.formNotes).then(
    //   (result) => {
    //     this.getNotesToAPI(); // memanggil fungsi GET ketika berhasil mengupdate data
    //   }
    // );
  };

  // Fungsi untuk merubah title dan body yang di input oeh user
  handleFormNotesChange = (e) => {
    let formNotesNew = { ...this.state.formNotes }; //  mengekstrak nilai-nilai dari sebuah array atau objek
    let idUnique = new Date().getTime(); // mengambil date dan waktu untuk membuat id yang unik
    formNotesNew['id'] = idUnique; // memasukkan id yang unik tadi ke dalam id formNotesNew
    formNotesNew[e.target.name] = e.target.value; // menggambil target name nya dan ubah target nya menjadi value yg diinput
    this.setState({
      formNotes: formNotesNew, // memasukkan data baru ke dalam object formNotes
    });
  };

  // Fungsi yang digunakan untuk mengsubmit data
  handleSubmitData = (e) => {
    e.preventDefault();
    this.postNotesToAPI(); // memasukkan data ke dalam API ketika submit berhasil
  };

  componentDidMount() {
    this.getNotesToAPI(); // memanggil fungsi get untuk ditampilkan ke browser
  }

  render() {
    return (
      <div>
        <form className='bg-gray-900 lg:w-2/4 md:w-2/3 px-7 py-5 lg:m-auto md:m-auto lg:my-7 md:my-7 mx-5 my-5 rounded-lg '>
          <h1 className='text-white font-bold text-2xl mb-5'>Add Notes</h1>
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
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-semibold'
            onClick={this.handleSubmitData}
          >
            Submit
          </button>
        </form>
        <h1 className='font-bold text-gray-900 text-2xl flex justify-center mt-20'>
          Your Notes
        </h1>

        <div className='flex justify-center'>
          <div className='grid grid-flow-row gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-5 mb-5'>
            {this.state.notes.map((Notes) => {
              return (
                <CardNotes
                  key={Notes.id} // KEY UNIQUE
                  data={Notes} // PROPS DATA NOTES (title , body , id)
                  remove={this.handleRemoveData} // PROPS REMOVE DATA
                  update={this.handleUpdateData} // PROPS UPDATE DATA
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
