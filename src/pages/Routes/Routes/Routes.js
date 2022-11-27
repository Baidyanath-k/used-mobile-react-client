import { createBrowserRouter } from "react-router-dom";
import Blogs from "../../Blogs/Blogs";
import Category from "../../category/Category/Category";
import SymphonyCategory from "../../category/SymphonyCategory/SymphonyCategory";
import WaltonCategory from "../../category/WaltonCategory/WaltonCategory";
import Home from "../../Home/Home/Home";
import ProductsDetails from "../../Home/ProductDetails/ProductsDetails";
import SymphonyDetails from "../../Home/SymphonyDetails/SymphonyDetails";
import WaltonProDetails from "../../Home/WaltonProDetails/WaltonProDetails";
import CategoryLayout from "../../Layout/CategoryLayout";
import MainLayot from "../../Layout/MainLayot";
import Login from "../../Login/Login";
import Register from "../../Register/Register";
import notFound from '../../../assets/not-found/404.png'
import PrivateRoutes from "../PrivateRoutes";
import DashboardLayout from "../../Layout/DashboardLayout";
import Dashboard from "../../dashboard/Dashboard/Dashboard";

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
            {
                path: '/product/:id',
                element: <PrivateRoutes><ProductsDetails></ProductsDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/samsungcollection/${params.id}`)
            },
            {
                path: '/symphonyProduct/:id',
                element: <PrivateRoutes><SymphonyDetails></SymphonyDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/symphonycollection/${params.id}`)
            },
            {
                path: '/waltonProduct/:id',
                element: <PrivateRoutes><WaltonProDetails></WaltonProDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/waltoncollection/${params.id}`)
            },


        ]
    },
    {
        path: '/category',
        element: <PrivateRoutes><CategoryLayout></CategoryLayout></PrivateRoutes>,
        children: [
            {
                path: '/category',
                element: <Category></Category>,
            },
            {
                path: '/category/symphonycategory',
                element: <SymphonyCategory></SymphonyCategory>,
            },
            {
                path: '/category/waltoncategory',
                element: <WaltonCategory></WaltonCategory>,
            },
        ]
    },
    {
        path: '/users',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [
            {
                path: '/users',
                element: <Dashboard></Dashboard>,
            },

        ]
    },
    {
        path: '*',
        element: <> <img className="w-full" src={notFound} alt="not found" /> </>
    }
])
export default router