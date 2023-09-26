import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUser = useLoaderData();
    const handleUpdateUser = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = { name, email };
        console.log(updatedUser);
        fetch(`http://localhost:1212/users/${loadedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('user has benn updated')
                }
            })
    }
    return (
        <div>
            <h2 className='text-center mt-3 text-danger'>Update Your Information</h2>
            <div className='mx-auto shadow mt-5 py-5 px-5 mb-5' style={{ width: '40%' }}>
                <h2 className='text-center mb-4'>Update User</h2>
                <form onSubmit={handleUpdateUser}>
                    <label>
                        Name
                    </label><br />
                    <input className='w-100 px-2 py-1 fw-semibold bg-light mb-3 rounded' style={{ fontSize: '20px', border: 'none' }} type="text" name="name" id="name" placeholder='Enter Your Name' required defaultValue={loadedUser?.name} /><br />
                    <label>
                        Email
                    </label><br />
                    <input className='w-100 px-2 py-1 fw-semibold bg-light mb-3 rounded' style={{ fontSize: '20px', border: 'none' }} type="email" name="email" id="email" placeholder='Enter Your Email' required defaultValue={loadedUser?.email} /><br />
                    <button className='bg-black fw-semibold text-white mt-3' style={{ fontSize: '20px', width: '100%', border: 'none', padding: '6px' }}>Update User</button>
                </form>
            </div>
        </div>
    );
};

export default Update;