import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    return (
        <>
            <NavBar></NavBar>
            <div className="drawer drawer-mobile">

                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">

                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        {/* <li><Link to='/users'>Users</Link></li> */}
                        <li><Link to='/users/products'>Products</Link></li>

                        {
                            isAdmin && <>
                                <li><Link to='/users/users'>Users</Link></li>

                            </>
                        }

                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default DashboardLayout;