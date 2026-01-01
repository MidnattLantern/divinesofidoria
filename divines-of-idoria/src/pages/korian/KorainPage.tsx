import { NavLink, Route, Routes } from "react-router";
import "./KorainPage.css";
import KorainPortraitPage from "./korain-portrait/KorainPortraitPage";
import KorainSymbolPage from "./korain-symbol/KorainSymbolPage";
import KorainTempleInterior from "./korain-temple-interior/KorainTempleInterior";
import KorainTempleExterior from "./korain-temple-exterior/KorainTempleExterior";
import KorainShrinePage from "./korain-shrine/KorainShrinePage";
import { useEffect } from "react";

function DisplayKorainPage() {
    useEffect(() => {
        document.title = "Idoria | Korain God";
    }, []);

    return (
        <div className="korain-page-view">
            <h1>Korain God</h1>
            <NavLink to={"portrait"}>Portrait</NavLink>
            <NavLink to={"symbol"}>Symbol</NavLink>
            <NavLink to={"temple-interior"}>Temple Interior</NavLink>
            <NavLink to={"temple-exterior"}>Temple Exterior</NavLink>
            <NavLink to={"shrine"}>Shrine</NavLink>
        </div>
    );
};

function KorainPage() {
    return (
        <Routes>
            <Route index element={<DisplayKorainPage/>}/>
            <Route path="portrait" element={<KorainPortraitPage/>}/>
            <Route path="symbol" element={<KorainSymbolPage/>}/>
            <Route path="temple-interior" element={<KorainTempleInterior/>}/>
            <Route path="temple-exterior" element={<KorainTempleExterior/>}/>
            <Route path="shrine" element={<KorainShrinePage/>}/>
        </Routes>
    );
};

export default KorainPage;