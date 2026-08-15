import { NavLink, Route, Routes } from "react-router";
import "./MoraPage.scss";
import MoraPortraitPage from "./mora-portrait/MoraPortraitPage";
import MoraSymbolPage from "./mora-symbol/MoraSymbolPage";
import MoraTempleInteriorPage from "./mora-temple-interior/MoraTempleInteriorPage";
import MoraTempleExteriorPage from "./mora-temple-exterior/MoraTempleExteriorPage";
import MoraShrinePage from "./mora-shrine/MoraShrinePage";
import { useEffect } from "react";
import portraitPreviewImage from "../../assets/mora-assets/preview/preview-portrait-lossless.webp";
import symbolPreviewImage from "../../assets/mora-assets/preview/preview-icon.webp";
import templeInteriorPreviewImage from "../../assets/mora-assets/preview/preview-temple-interior.webp";
import templeExteriorPreviewImage from "../../assets/mora-assets/preview/preview-temple-exterior.webp";
import shrinePreviewImage from "../../assets/mora-assets/preview/preview-shrine-empty.webp";

function DisplayMoraPage() {
    useEffect(() => {
        document.title = "Idoria | Mora Goddes";
    }, []);

    return (
        <div className="mora-page-view">
            <h1>Mora Goddess</h1>
            <NavLink to={"portrait"}>
                <span>Portrait</span>
                <img src={portraitPreviewImage} alt="Portrait Preview"/>
            </NavLink>
            <NavLink to={"symbol"}>
                <span>Symbol</span>
                <img src={symbolPreviewImage} alt="Symbol Preview"/>
            </NavLink>
            <NavLink to={"temple-interior"}>
                <span aria-label="Temple Interior">Temple Int.</span>
                <img src={templeInteriorPreviewImage} alt="Temple Interior Preview"/>
            </NavLink>
            <NavLink to={"temple-exterior"}>
                <span aria-label="Temple Exterior">Temple Ext.</span>
                <img src={templeExteriorPreviewImage} alt="Temple Exterior Preview"/>
            </NavLink>
            <NavLink to={"shrine"}>
                <span>Shrine</span>
                <img src={shrinePreviewImage} alt="Shrine Preview"/>
            </NavLink>
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