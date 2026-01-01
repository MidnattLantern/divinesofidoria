import { NavLink, Route, Routes } from "react-router";
import "./PooraatPage.css";
import PooraatSymbolPage from "./pooraat-symbol/PooraatSymbolPage";
import PooraatPortraitPage from "./pooraat-portrait/PooraatPortraitPage";
import PooraatTemplePage from "./pooraat-temple/PooraatTemplePage";
import PooraatShrinePage from "./pooraat-shrine/PooraatShrinePage";
import { useEffect } from "react";

function DisplayPooraatPage() {
    useEffect(() => {
        document.title = "Idoria | Po'oraat God";
    }, []);

    return (
        <div className="pooraat-page-view">
            <h1>Po'oraat God</h1>
            <NavLink to={"portrait"}>Portrait</NavLink>
            <NavLink to={"symbol"}>Symbol</NavLink>
            <NavLink to={"temple"}>Temple</NavLink>
            <NavLink to={"shrine"}>Shrine</NavLink>
        </div>
    );
};

function PooraatPage() {
    return (
        <Routes>
            <Route index element={<DisplayPooraatPage/>}/>
            <Route path="symbol" element={<PooraatSymbolPage/>}/>
            <Route path="portrait" element={<PooraatPortraitPage/>}/>
            <Route path="symbol" element={<PooraatSymbolPage/>}/>
            <Route path="temple" element={<PooraatTemplePage/>}/>
            <Route path="shrine" element={<PooraatShrinePage/>}/>
        </Routes>
    );
};

export default PooraatPage;