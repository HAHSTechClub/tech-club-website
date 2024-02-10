import { Outlet } from "react-router-dom";
import "./Navbar.css";
import logo from "./assets/logo.png";
import { useLocation, Link } from "react-router-dom";

function Navbar() {
    const location = useLocation();
    const { pathname } = location;

    return (
        <nav
            style={{
                backgroundColor: getBackgroundColour(pathname),
            }}
        >
            <div className="logo-container">
                <img src={logo} alt="" className="logo" />
            </div>
            <div className="links">
                <Link to="/">home</Link>
                <Link to="/honour-roll">honour roll</Link>
                <Link to="/leaderboard">leaderboard</Link>
                <Link to="/contacts">contacts</Link>
            </div>
        </nav>
    );
}

function getBackgroundColour(pathname) {
    switch (pathname) {
        case "/":
            return "#FFBD59";
            break;
        case "/leaderboard":
            return "#FFCC00";
            break;
    }
}

export default Navbar;
