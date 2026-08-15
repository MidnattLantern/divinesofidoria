import { useEffect } from "react";
import "./sunbawnPage.scss";
import { Route, Routes } from "react-router";
import SunbawnSymbolPage from "./sunbawn-symbol/SunbawnSymbolPage";
import SunbawnShrinePage from "./sunbawn-shrine/SunbawnShrinePage";
import SunbawnTemplePage from "./sunbawn-temple/SunbawnTemplePage";
import SunbawnPortraitPage from "./sunbawn-portrait/SunbawnPortraitPage";
import portraitPreviewImage from "../../assets/sunbawn-assets/preview/preview-portrait.webp";
import symbolPreviewImage from "../../assets/sunbawn-assets/preview/preview-symbol.webp";
import templePreviewImage from "../../assets/sunbawn-assets/preview/preview-temple.webp";
import shrinePreviewImage from "../../assets/sunbawn-assets/preview/preview-shrine-no-vines.webp";
import ProjectsDirectory from "../../components/projectsDirectory/ProjectsDirectory";

function DisplaySunbawnPage() {
    useEffect(() => {
        document.title = "Idoria | Sunbawn";
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
            name: "Temple",
            linkTo: "temple",
            previewImage: templePreviewImage
        },
        {
            name: "Shrine",
            linkTo: "shrine",
            previewImage: shrinePreviewImage
        }
    ];

    return (
        <div className="sunbawn-page-view">
            <h1>Sunbawn God</h1>
            <ProjectsDirectory projectsDirectory={projectsDirectory}/>
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
