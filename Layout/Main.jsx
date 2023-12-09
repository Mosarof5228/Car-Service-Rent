import { Outlet } from "react-router-dom";
import Footer from "../src/pages/Shared/Footer";
import Navbar from "../src/pages/Shared/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;