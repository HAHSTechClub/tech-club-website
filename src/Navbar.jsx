import { Outlet } from "react-router-dom";
import "./Navbar.css";
import logo from "./assets/logo.png";

function Navbar() {
    return (
        <>
            <nav>
                <div className="logo-container">
                    <img src={logo} alt="" className="logo" />
                </div>
                <div className="links">
                    <a href="/">home</a>
                    <a href="/honour-roll">honour roll</a>
                    <a href="/leaderboard">leaderboard</a>
                    <a href="/contacts">contacts</a>
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export default Navbar;
