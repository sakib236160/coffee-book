import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div>
            {/* NavBar */}
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-232px)] py-12 container mx-auto px-12">
                {/* Dinamick */}
                <Outlet></Outlet>
            </div>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;