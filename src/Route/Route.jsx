import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Dashboard from "../Pages/DashBoard/Dashboard";
import Home from "../Pages/Home/Home";
import Product from "../Pages/Product/Product";

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
            element:<Product></Product>
        },
        {
            path: '/dashboard',
            element:<Dashboard></Dashboard>
        }
    ]
}
   
    
  
])
export default createRouter;