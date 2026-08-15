import { Route, Routes } from "react-router";
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
import ProjectsDirectory from "../../components/projectsDirectory/ProjectsDirectory";

function DisplayMoraPage() {
    useEffect(() => {
        document.title = "Idoria | Mora Goddes";
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
        <div className="mora-page-view">
            <h1>Mora Goddess</h1>
            <ProjectsDirectory projectsDirectory={projectsDirectory}/>
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