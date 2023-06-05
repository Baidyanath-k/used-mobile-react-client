import { createBrowserRouter } from "react-router-dom";
import notFound from "../../../assets/not-found/404.png";
import Blogs from "../../Blogs/Blogs";
import BlogDetail from "../../Home/Blogs/BlogDetail";
import Home from "../../Home/Home/Home";
import ProductsDetails from "../../Home/ProductDetails/ProductsDetails";
import SymphonyDetails from "../../Home/SymphonyDetails/SymphonyDetails";
import WaltonProDetails from "../../Home/WaltonProDetails/WaltonProDetails";
import CategoryLayout from "../../Layout/CategoryLayout";
import DashboardLayout from "../../Layout/DashboardLayout";
import MainLayot from "../../Layout/MainLayot";
import Login from "../../Login/Login";
import Register from "../../Register/Register";
import Category from "../../category/Category/Category";
import SymphonyCategory from "../../category/SymphonyCategory/SymphonyCategory";
import WaltonCategory from "../../category/WaltonCategory/WaltonCategory";
import AllProducts from "../../dashboard/AllProduct/AllProducts";
import Dashboard from "../../dashboard/Dashboard/Dashboard";
import PrivateRoutes from "../PrivateRoutes";
import AdminRoutes from "./AdminRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayot></MainLayot>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/product/:id",
        element: (
          <PrivateRoutes>
            <ProductsDetails></ProductsDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://ass-12-server.vercel.app/samsungcollection/${params.id}`
          ),
      },
      {
        path: "/symphonyProduct/:id",
        element: (
          <PrivateRoutes>
            <SymphonyDetails></SymphonyDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://ass-12-server.vercel.app/symphonycollection/${params.id}`
          ),
      },
      {
        path: "/waltonProduct/:id",
        element: (
          <PrivateRoutes>
            <WaltonProDetails></WaltonProDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://ass-12-server.vercel.app/waltoncollection/${params.id}`
          ),
      },
      {
        path: "/blogs/:_id",
        element: <BlogDetail></BlogDetail>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/blogs/${params._id}`),
      },
    ],
  },
  {
    path: "/category",
    element: (
      <PrivateRoutes>
        <CategoryLayout></CategoryLayout>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/category",
        element: <Category></Category>,
      },
      {
        path: "/category/symphonycategory",
        element: <SymphonyCategory></SymphonyCategory>,
      },
      {
        path: "/category/waltoncategory",
        element: <WaltonCategory></WaltonCategory>,
      },
    ],
  },
  {
    path: "/users",
    element: (
      <PrivateRoutes>
        <DashboardLayout></DashboardLayout>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/users/users",
        element: (
          <AdminRoutes>
            <Dashboard></Dashboard>
          </AdminRoutes>
        ),
      },
      {
        path: "/users/products",
        element: <AllProducts></AllProducts>,
      },
    ],
  },
  {
    path: "*",
    element: (
      <>
        {" "}
        <img className="w-full" src={notFound} alt="not found" />{" "}
      </>
    ),
  },
]);
export default router;
