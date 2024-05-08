import { Outlet } from "react-router-dom";
import "../styles/Footer.css";
import logo from "../assets/hurlstone-tech-club-logo.png";
import { useLocation, Link } from "react-router-dom";

function Footer() {
    const location = useLocation();
    const { pathname } = location;

    return (
        <footer
            style={{
                backgroundColor: colours.navBackground[pathname],
                borderTop: `2px solid ${colours.borderColour[pathname]}`,
            }}
        >
            <div className="footer-logo-container">
                <img src={logo} alt="" className="footer-logo" />
            </div>
            <div className="footer-text-container">
                <div
                    style={{
                        color: colours.linksColour[pathname],
                    }}
                >
                    Logo designed by Kevin Fracis | Website designed and coded
                    by Utsav Kashichhwa
                </div>
                <hr
                    style={{
                        borderColor: colours.linksColour[pathname],
                        marginBlock: "8px",
                    }}
                />
                <div
                    style={{
                        color: colours.linksColour[pathname],
                    }}
                >
                    © 2024 Hurlstone Technology CLub
                </div>
            </div>
        </footer>
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

export default Footer;
