import { useEffect } from "react";
import "./sunbawnPage.scss";
import { NavLink, Route, Routes } from "react-router";
import SunbawnSymbolPage from "./sunbawn-symbol/SunbawnSymbolPage";
import SunbawnShrinePage from "./sunbawn-shrine/SunbawnShrinePage";
import SunbawnTemplePage from "./sunbawn-temple/SunbawnTemplePage";
import SunbawnPortraitPage from "./sunbawn-portrait/SunbawnPortraitPage";

function DisplaySunbawnPage() {
    useEffect(() => {
        document.title = "Idoria | Sunbawn";
    }, []);

    return (
        <div className="sunbawn-page-view2">
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
            <Route path="symbol" element={<SunbawnSymbolPage/>}/>
            <Route path="portrait" element={<SunbawnPortraitPage/>}/>
            <Route path="temple" element={<SunbawnTemplePage/>}/>
            <Route path="shrine" element={<SunbawnShrinePage/>}/>
        </Routes>
    )
};

export default SunbawnPage;
