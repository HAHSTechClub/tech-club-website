import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/Layout.css";

function Layout() {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
