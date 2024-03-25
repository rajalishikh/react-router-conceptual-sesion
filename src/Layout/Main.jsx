import { Link, Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";


const Main = () => {
    return (
        <div>
            <section className="flex justify-between shadow-xl py-4 ">
                <div className="m-6">
                    <h1>Amazon</h1>
                </div>
                <nav>
                    <ul className="flex gap-16 m-6">
                        <li>
                            <Link to={'/'} className=" hover:bg-red-700 p-3" >Home</Link>
                            
                        </li>
                        <li>
                            <Link to={"/products"} className=" hover:bg-red-700 p-3">Products</Link>
                       
                            
                        </li>
                        <li>
                            <Link className=" hover:bg-red-700 p-3" to={"/dashboard"}>DashBoard</Link>
                            
                        </li>

                    </ul>
                </nav>
                
            </section>
            <div className="min-h-screen">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;