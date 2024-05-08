import { Outlet } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";
import menuIcon from "../assets/menu.png";
import closeIcon from "../assets/close.png";
import { useLocation, Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
    const location = useLocation();
    const { pathname } = location;

    const [sideNav, setSideNav] = useState(false);

    return (
        <nav
            style={{
                backgroundColor: colours.navBackground[pathname],
                borderBottom: `2px solid ${colours.borderColour[pathname]}`,
            }}
        >
            {console.log(sideNav)}

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
                <Link to="/" className={pathname == "/" ? "selected" : ""}>
                    Home
                </Link>
                <Link
                    to="/honour-roll"
                    className={pathname == "/honour-roll" ? "selected" : ""}
                >
                    Honour roll
                </Link>
                <Link
                    to="/leaderboard"
                    className={pathname == "/leaderboard" ? "selected" : ""}
                >
                    Leaderboard
                </Link>
                <Link
                    to="/contacts"
                    className={pathname == "/contacts" ? "selected" : ""}
                >
                    Contacts
                </Link>
                <div
                    className="underline"
                    style={{ backgroundColor: colours.linksColour[pathname] }}
                ></div>
            </div>
            <img
                src={menuIcon}
                style={{ filter: colours.logoFilter[pathname] }}
                className="menu"
                onClick={() => setSideNav(true)}
            />
            <div
                className="sidenav"
                style={{ right: sideNav ? "0" : "-150px" }}
            >
                <img
                    src={closeIcon}
                    alt=""
                    className="close"
                    onClick={(event) => setSideNav(false)}
                />
                <div
                    className="sidelinks"
                    onClick={(event) => setSideNav(false)}
                >
                    <Link to="/" className={pathname == "/" ? "selected" : ""}>
                        Home
                    </Link>
                    <Link
                        to="/honour-roll"
                        className={pathname == "/honour-roll" ? "selected" : ""}
                    >
                        Honour roll
                    </Link>
                    <Link
                        to="/leaderboard"
                        className={pathname == "/leaderboard" ? "selected" : ""}
                    >
                        Leaderboard
                    </Link>
                    <Link
                        to="/contacts"
                        className={pathname == "/contacts" ? "selected" : ""}
                    >
                        Contacts
                    </Link>
                </div>
            </div>
        </nav>
    );
}

const colours = {
    navBackground: {
        "/": "#ffa215",
        "/honour-roll": "white",
        "/leaderboard": "#FFCC00",
        "/contacts": "#ffa215",
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
        "/": "ffa215",
        "/honour-roll": "#FFD700",
        "/leaderboard": "#FD8FA3",
        "/contacts": "#ffa215",
    },
};

export default Navbar;
