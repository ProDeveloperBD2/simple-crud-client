import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers)
    const handleUserDelete = _id => {
        fetch(`http://localhost:1212/users/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('deleted success');
                    const remaining = users.filter(user => user._id !== _id)
                    setUsers(remaining)
                }
            })
    }
    return (
        <div>
            <h1 className='text-center mt-3 text-danger'>Users</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', margin: '10px', paddingTop: '25px', paddingBottom: '90px' }}>
                {
                    users.map(user => <div className='bg-danger text-center text-white rounded' key={user._id}><h2>{user.name}</h2 > <h4>{user.email}</h4> <p>{user._id}</p>
                        <Link to={`/update/${user._id}`}>
                            <button className='btn btn-secondary mb-3 me-3'>Update</button>
                        </Link>
                        <button
                            className='btn btn-secondary mb-3'
                            onClick={() => handleUserDelete(user._id)}
                        >Delete</button> </div>)
                }
            </div>
        </div >
    );
};

export default Users;