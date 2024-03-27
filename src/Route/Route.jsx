import { createBrowserRouter } from "react-router-dom";
import DeEditProfile from "../DashBoard/DaEditprofile/DeEditProfile";
import DaProfile from "../DashBoard/DaProfile/DaProfile";
import DashBoardHome from "../DashBoard/DashBoardHome/DashBoardHome";
import Main from "../Layout/Main";
import DashBoardLayout from "../Pages/DashBoardLayOut/DashBoardLayout";
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
            element: <DashBoardLayout></DashBoardLayout>,
            children: [
                {
                    path: '/dashboard',
                    element:<DashBoardHome></DashBoardHome>
                    
                },
                {
                    path: '/dashboard/Profile',
                    element:<DaProfile></DaProfile>
                },
                {
                    path: '/dashboard/EditProfile',
                    element:<DeEditProfile></DeEditProfile>
                    
                }
            ]
           
        }
    ]
}
   
    
  
])
export default createRouter;