import { NavLink, Route, Routes } from "react-router";
import "./MoraPage.css";
import MoraPortraitPage from "./mora-portrait/MoraPortraitPage";

function DisplayMoraPage() {
    return (
        <>
            <h1>Mora Goddess</h1>
            <NavLink to={"portrait"}>Portrait</NavLink>
            <NavLink to={"symbol"}>Symbol</NavLink>
            <NavLink to={"temple-interior"}>Temple Interior</NavLink>
            <NavLink to={"temple-exterior"}>Temple Exterior</NavLink>
            <NavLink to={"shrine"}>Shrine</NavLink>
        </>
    );
};

function MoraPage() {
    return (
        <Routes>
            <Route index element={<DisplayMoraPage/>}/>
            <Route path="portrait" element={<MoraPortraitPage/>}/>
            <Route path="symbol" element={<h1>Symbol</h1>}/>
            <Route path="temple-interior" element={<h1>Temple Interior</h1>}/>
            <Route path="temple-exterior" element={<h1>Temple Exterior</h1>}/>
            <Route path="shrine" element={<h1>Shrine</h1>}/>
        </Routes>
    );
};

export default MoraPage;