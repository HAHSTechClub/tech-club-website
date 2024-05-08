import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Layout() {
    return (
        <div className="layout">
            <Navbar />
            <div style={{ marginTop: "120px", height: "calc(100vh - 120px)" }}>
                <Outlet />
                <Footer />
            </div>
        </div>
    );
}

export default Layout;
