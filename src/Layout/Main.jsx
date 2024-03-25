import { Outlet } from "react-router-dom";
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
                            <a className=" hover:bg-red-700 p-3" href='/'>Home</a>
                            
                        </li>
                        <li>
                        <a className=" hover:bg-red-700 p-3" href="/products">Products</a>
                            
                        </li>
                        <li>
                            <a className=" hover:bg-red-700 p-3" href="/dashboard">DashBoard</a>
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