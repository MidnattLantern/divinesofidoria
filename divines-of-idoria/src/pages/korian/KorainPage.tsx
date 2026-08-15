import { Route, Routes } from "react-router";
import "./KorainPage.scss";
import KorainPortraitPage from "./korain-portrait/KorainPortraitPage";
import KorainSymbolPage from "./korain-symbol/KorainSymbolPage";
import KorainTempleInterior from "./korain-temple-interior/KorainTempleInterior";
import KorainTempleExterior from "./korain-temple-exterior/KorainTempleExterior";
import KorainShrinePage from "./korain-shrine/KorainShrinePage";
import { useEffect } from "react";
import portraitPreviewImage from "../../assets/korain-assets/preview/preview-portrait-lossless.webp";
import symbolPreviewImage from "../../assets/korain-assets/preview/preview-symbol-lossless.webp";
import templeInteriorPreviewImage from "../../assets/korain-assets/preview/preview-temple-interior-lossless.webp";
import templeExteriorPreviewImage from "../../assets/korain-assets/preview/preview-temple-exterior-lossless.webp";
import shrinePreviewImage from "../../assets/korain-assets/preview/preview-shrine-empty.webp";
import ProjectsDirectory from "../../components/projectsDirectory/ProjectsDirectory";

function DisplayKorainPage() {
    useEffect(() => {
        document.title = "Idoria | Korain God";
    }, []);

    const projectsDirectory = [
        {
            name: "Portrait",
            linkTo: "portrait",
            previewImage: portraitPreviewImage
        },
        {
            name: "Symbol",
            linkTo: "symbol",
            previewImage: symbolPreviewImage
        },
        {
            name: "Temple Interior",
            linkTo: "temple-interior",
            previewImage: templeInteriorPreviewImage
        },
        {
            name: "Temple Exterior",
            linkTo: "temple-exterior",
            previewImage: templeExteriorPreviewImage
        },
        {
            name: "Shrine",
            linkTo: "shrine",
            previewImage: shrinePreviewImage
        }
    ];

    return (
        <div className="korain-page-view">
            <h1>Korain God</h1>
            <ProjectsDirectory projectsDirectory={projectsDirectory}/>
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