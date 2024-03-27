import { Link, Outlet } from "react-router-dom";


const DashBoardLayout = () => {
    return (
        <div className="flex justify-between gap-3">
           
            <div className=" bg-white w-[30%]">
                <nav className="text-black">
                    <ul>
                        <li>
                            <Link to={'/dashboard'}>Welcome to home </Link>

                        </li>
                        <li>
                            <Link to={'/dashboard/Profile'}>DashBoard Profile </Link>
                        </li>
                        <li>
                            <Link to={'/dashboard/EditProfile'}>DashBoard Edit Profile </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="w-[70%]">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoardLayout;