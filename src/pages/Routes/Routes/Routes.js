import { createBrowserRouter } from "react-router-dom";
import Blogs from "../../Blogs/Blogs";
import Home from "../../Home/Home/Home";
import MainLayot from "../../Layout/MainLayot";
import Login from "../../Login/Login";
import Register from "../../Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayot></MainLayot>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
        ]
    }
])
export default router