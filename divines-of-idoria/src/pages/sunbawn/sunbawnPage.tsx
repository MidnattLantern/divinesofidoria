import { useEffect } from "react";
import "./sunbawnPage.css";
import { NavLink, Route, Routes } from "react-router";

function DisplaySunbawnPage() {
    useEffect(() => {
        document.title = "Idoria | Sunbawn";
    }, []);

    return (
        <div className="sunbawn-page-view">
            <h1>Sunbawn God</h1>
            <NavLink to={"portrait"}>Portrait</NavLink>
            <NavLink to={"symbol"}>Symbol</NavLink>
            <NavLink to={"temple"}>Temple</NavLink>
            <NavLink to={"shrine"}>Shrine</NavLink>
        </div>
    );
};

function SunbawnPage() {
    return (
        <Routes>
            <Route index element={<DisplaySunbawnPage/>}/>
            <Route path="symbol" element={<h2>Symbol</h2>}/>
            <Route path="portrait" element={<h2>Portrait</h2>}/>
            <Route path="temple" element={<h2>Temple</h2>}/>
            <Route path="shrine" element={<h2>Shrine</h2>}/>
        </Routes>
    )
};

export default SunbawnPage;
