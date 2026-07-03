import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber";

const Layout = () => {
    return (
        <div className="bg-black text-white font-serif">
            <Navber />
            <Outlet />
        </div>
    );
};

export default Layout;