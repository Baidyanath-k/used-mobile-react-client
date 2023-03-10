import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';

const CategoryLayout = () => {
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

                        <li><Link to='/category'>Samsung</Link></li>
                        <li><Link to='/category/symphonycategory'>Symphony</Link></li>
                        <li><Link to='/category/waltoncategory'>Walton</Link></li>
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </>

    );
};

export default CategoryLayout;