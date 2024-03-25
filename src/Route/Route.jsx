import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Dashboard from "../Pages/DashBoard/Dashboard";
import Home from "../Pages/Home/Home";
import Product from "../Pages/Product/Product";
import ProductUN from "../Pages/ProductUN/ProductUN";

const createRouter = createBrowserRouter([{

    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: '/products',
            loader:()=>fetch('https://dummyjson.com/products'),
            element:<Product></Product>
        },
        {
            path: '/product/:productId',
            loader:({params})=>fetch(`https://dummyjson.com/products/${params.productId}`),
            element:<ProductUN></ProductUN>
        },
        {
            path: '/dashboard',
            element:<Dashboard></Dashboard>
        }
    ]
}
   
    
  
])
export default createRouter;