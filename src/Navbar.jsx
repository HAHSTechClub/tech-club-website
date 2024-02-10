import { Outlet } from "react-router-dom";
import "./Navbar.css";
import logo from "./assets/logo.png";
import logoBlack from "./assets/logo-black.png";
import { useLocation, Link } from "react-router-dom";

function Navbar() {
    const location = useLocation();
    const { pathname } = location;

    return (
        <nav
            style={{
                backgroundColor: colours.navBackground[pathname],
                borderBottom: `2px solid ${colours.borderColour[pathname]}`,
            }}
        >
            <div className="logo-container">
                <img
                    src={logo}
                    style={{ filter: colours.logoFilter[pathname] }}
                    alt=""
                    className="logo"
                />
            </div>
            <div
                className="links"
                style={{ color: colours.linksColour[pathname] }}
            >
                <Link to="/">home</Link>
                <Link to="/honour-roll">honour roll</Link>
                <Link to="/leaderboard">leaderboard</Link>
                <Link to="/contacts">contacts</Link>
            </div>
        </nav>
    );
}

const colours = {
    navBackground: {
        "/": "#FFBD59",
        "/honour-roll": "white",
        "/leaderboard": "#FFCC00",
        "/contacts": "#FFBD59",
    },
    logoFilter: {
        "/": "none",
        "/honour-roll": "invert()",
        "/leaderboard": "none",
        "/contacts": "none",
    },
    linksColour: {
        "/": "white",
        "/honour-roll": "black",
        "/leaderboard": "white",
        "/contacts": "white",
    },
    borderColour: {
        "/": "#FFBD59",
        "/honour-roll": "#FFD700",
        "/leaderboard": "#FD8FA3",
        "/contacts": "#FFBD59",
    },
};

export default Navbar;
