import React from 'react';
import Axios from 'axios';
import CardNotes from '../Components/CardNotes';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

class Home extends React.Component {
  state = {
    notes: [],
    formNotes: {
      userId: 1,
      id: '',
      title: '',
      body: '',
    },
    isUpdate: false, // state yang digunakan untuk melakukan update
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
      toast.success('Delete Note Success', {
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
        this.setState({
          formNotes: {
            userId: 1,
            id: '',
            title: '',
            body: '',
          },
        });
      }
    );
  };

  // PUT (Fungsi yang digunakan untuk mengudate data)
  putDataToAPI = () => {
    Axios.put(
      `http://localhost:3004/notes/${this.state.formNotes.id}`,
      this.state.formNotes
    ).then((result) => {
      toast.success('Update Note Success', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      this.getNotesToAPI(); // memanggil fungsi GET ketika berhasil mengupdate data
      this.setState({
        isUpdate: false,
        formNotes: {
          userId: 1,
          id: '',
          title: '',
          body: '',
        },
      });
    });
  };

  handleUpdateData = (data) => {
    this.setState({
      formNotes: data, // merubah state formNotes
      isUpdate: true, // merubah state isUpdate menjadi true
    });
  };

  // Fungsi untuk merubah title dan body yang di input oeh user
  handleFormNotesChange = (e) => {
    let formNotesNew = { ...this.state.formNotes }; //  mengekstrak nilai-nilai dari sebuah array atau objek
    let idUnique = new Date().getTime(); // mengambil date dan waktu untuk membuat id yang unik

    // jika isUpdate false / tidak dalam kondisi mengupdate data maka jangan ubah id nya
    if (!this.state.isUpdate) {
      formNotesNew['id'] = idUnique; // memasukkan id yang unik tadi ke dalam id formNotesNew
    }
    formNotesNew[e.target.name] = e.target.value; // menggambil target name nya dan ubah target nya menjadi value yg diinput
    this.setState({
      formNotes: formNotesNew, // memasukkan data baru ke dalam object formNotes
    });
  };

  // Fungsi yang digunakan untuk mengsubmit data
  handleSubmitData = (e) => {
    e.preventDefault();
    if (this.state.isUpdate) {
      this.putDataToAPI(); // jika state isUpdate menjadi true maka lakukan put data to API
    } else {
      this.postNotesToAPI(); // jika isUpdate false maka lakukan post data to API
    }
  };

  handleDetailNotes = () => {
    console.log(`hello`);
  };

  componentDidMount() {
    this.getNotesToAPI(); // memanggil fungsi get untuk ditampilkan ke browser
  }

  render() {
    return (
      <div>
        <form className='bg-gray-900 lg:w-2/4 md:w-2/3 px-6 py-5 lg:m-auto md:m-auto lg:my-7 md:my-7 mx-2 my-5 rounded-lg '>
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
              value={this.state.formNotes.title}
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
              value={this.state.formNotes.body}
            />
          </div>
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-semibold'
            onClick={this.handleSubmitData}
          >
            Submit
          </button>
        </form>
        <h1 className='font-bold text-gray-900 text-2xl flex justify-center mt-20'>
          Your Notes
        </h1>

        <div className='flex justify-center '>
          <div className='grid grid-flow-row gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mb-5'>
            {this.state.notes.map((Notes) => {
              return (
                <CardNotes
                  key={Notes.id} // KEY UNIQUE
                  data={Notes} // PROPS DATA NOTES (title , body , id)
                  remove={this.handleRemoveData} // PROPS REMOVE DATA
                  update={this.handleUpdateData} // PROPS UPDATE DATA
                  detailNotes={this.handleDetailNotes}
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
