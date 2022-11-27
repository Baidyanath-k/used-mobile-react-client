import { useQuery, } from '@tanstack/react-query'

import { toast } from 'react-toastify';

const Dashboard = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://ass-12-server.vercel.app/users`)
            const data = await res.json()
            return data;
        }
    });




    const adminHandler = id => {
        fetch(`https://ass-12-server.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Admin successfull')
                    refetch()
                }
            })

    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>

                                <td>{user?.role !== 'admin' && <button onClick={() => adminHandler(user._id)} className='btn btn-xs btn-primary'>Admin</button>}</td>

                                <td><button className='btn btn-xs btn-secondary'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;