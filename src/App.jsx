import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import HonourRoll from "./HonourRoll.jsx";
import Leaderboard from "./Leaderboard.jsx";
import Navbar from "./Navbar.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}></Route>
                    <Route path="honour-roll" element={<HonourRoll />}></Route>
                    <Route path="leaderboard" element={<Leaderboard />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
