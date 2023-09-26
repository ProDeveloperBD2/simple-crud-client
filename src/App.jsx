import './App.css'

function App() {
  const handleAddUser = event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
    fetch('http://localhost:1212/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          alert('Users added Success')
          form.reset()
        }
      })
  }
  return (
    <>
      <h1 className='text-center mt-3 text-danger'>Simple CRUD Client</h1>
      <div className='mx-auto shadow mt-5 py-5 px-5 mb-5' style={{ width: '40%' }}>
        <h2 className='text-center mb-4'>Add User</h2>
        <form onSubmit={handleAddUser}>
          <label>
            Name
          </label><br />
          <input className='w-100 px-2 py-1 fw-semibold bg-light mb-3 rounded' style={{ fontSize: '20px', border: 'none' }} type="text" name="name" id="name" placeholder='Enter Your Name' required /><br />
          <label>
            Email
          </label><br />
          <input className='w-100 px-2 py-1 fw-semibold bg-light mb-3 rounded' style={{ fontSize: '20px', border: 'none' }} type="email" name="email" id="email" placeholder='Enter Your Email' required /><br />
          <button className='bg-black fw-semibold text-white mt-3' style={{ fontSize: '20px', width: '100%', border: 'none', padding: '6px' }}>Add User</button>
        </form>
      </div>
    </>
  )
}

export default App
