import { NavLink, Route, Routes } from "react-router";
import "./MoraPage.css";
import MoraPortraitPage from "./mora-portrait/MoraPortraitPage";
import MoraSymbolPage from "./mora-symbol/MoraSymbolPage";
import MoraTempleInteriorPage from "./mora-temple-interior/MoraTempleInteriorPage";
import MoraTempleExteriorPage from "./mora-temple-exterior/MoraTempleExteriorPage";
import MoraShrinePage from "./mora-shrine/MoraShrinePage";

function DisplayMoraPage() {
    return (
        <div className="mora-page-view">
            <h1>Mora Goddess</h1>
            <NavLink to={"portrait"}>Portrait</NavLink>
            <NavLink to={"symbol"}>Symbol</NavLink>
            <NavLink to={"temple-interior"}>Temple Interior</NavLink>
            <NavLink to={"temple-exterior"}>Temple Exterior</NavLink>
            <NavLink to={"shrine"}>Shrine</NavLink>
        </div>
    );
};

function MoraPage() {
    return (
        <Routes>
            <Route index element={<DisplayMoraPage/>}/>
            <Route path="portrait" element={<MoraPortraitPage/>}/>
            <Route path="symbol" element={<MoraSymbolPage/>}/>
            <Route path="temple-interior" element={<MoraTempleInteriorPage/>}/>
            <Route path="temple-exterior" element={<MoraTempleExteriorPage/>}/>
            <Route path="shrine" element={<MoraShrinePage/>}/>
        </Routes>
    );
};

export default MoraPage;