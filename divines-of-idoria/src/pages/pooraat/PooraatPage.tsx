import { Route, Routes } from "react-router";
import "./PooraatPage.scss";
import PooraatSymbolPage from "./pooraat-symbol/PooraatSymbolPage";
import PooraatPortraitPage from "./pooraat-portrait/PooraatPortraitPage";
import PooraatTemplePage from "./pooraat-temple/PooraatTemplePage";
import PooraatShrinePage from "./pooraat-shrine/PooraatShrinePage";
import { useEffect } from "react";
import portraitPreviewImage from "../../assets/pooraat-assets/preveiw/portrait-lossless-preview.webp";
import symbolPreviewImage from "../../assets/pooraat-assets/preveiw/preview-filtered.webp";
import templePreviewImage from "../../assets/pooraat-assets/preveiw/pooraat-temple-preview.webp";
import shrinePreviewImage from "../../assets/pooraat-assets/preveiw/preview-shrine-empty.webp";
import ProjectsDirectory from "../../components/projectsDirectory/ProjectsDirectory";

function DisplayPooraatPage() {
    useEffect(() => {
        document.title = "Idoria | Po'oraat God";
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
        <div className="pooraat-page-view">
            <h1>Po'oraat God</h1>
            <ProjectsDirectory projectsDirectory={projectsDirectory}/>
        </div>
    );
};

function PooraatPage() {
    return (
        <Routes>
            <Route index element={<DisplayPooraatPage/>}/>
            <Route path="symbol" element={<PooraatSymbolPage/>}/>
            <Route path="portrait" element={<PooraatPortraitPage/>}/>
            <Route path="temple" element={<PooraatTemplePage/>}/>
            <Route path="shrine" element={<PooraatShrinePage/>}/>
        </Routes>
    );
};

export default PooraatPage;
