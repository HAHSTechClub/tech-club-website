import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import HonourRoll from "./HonourRoll.jsx";
import Leaderboard from "./Leaderboard.jsx";
import Contacts from "./Contacts.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}></Route>
                    <Route path="honour-roll" element={<HonourRoll />}></Route>
                    <Route path="leaderboard" element={<Leaderboard />}></Route>
                    <Route path="contacts" element={<Contacts />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
