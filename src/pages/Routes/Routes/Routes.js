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
                element: <ProductsDetails></ProductsDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/samsungcollection/${params.id}`)
            },
            {
                path: '/symphonyProduct/:id',
                element: <SymphonyDetails></SymphonyDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/symphonycollection/${params.id}`)
            },
            {
                path: '/waltonProduct/:id',
                element: <WaltonProDetails></WaltonProDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/waltoncollection/${params.id}`)
            },


        ]
    },
    {
        path: '/category',
        element: <CategoryLayout></CategoryLayout>,
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
    }
])
export default router