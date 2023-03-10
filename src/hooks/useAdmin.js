import { useEffect, useState } from 'react';

const useAdmin = (email) => {
    console.log(email)
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsadminLoading] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`https://ass-12-server.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsAdmin(data.isAdmin);
                    setIsadminLoading(false)
                })
        }
    }, [email])

    return [isAdmin, isAdminLoading];

};

export default useAdmin;