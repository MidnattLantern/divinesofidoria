import { useEffect } from "react";
import "./IdorPage.scss";
import { Route, Routes } from "react-router";
import ProjectsDirectory from "../../components/projectsDirectory/ProjectsDirectory";
import symbolPreviewImage from "../../assets/idor-assets/preview/idor-symbol-preview.webp";
import IdorSymbolPage from "./idor-symbol/IdorSymbolPage";

function DisplayIdorPage() {
    useEffect(() => {
        document.title = "Idoria | Idor";
    }, []);

    const projectsDirectory = [
        {
            name: "Symbol",
            linkTo: "symbol",
            previewImage: symbolPreviewImage
        }
    ];

    return (
        <div className="idor-page-view">
            <h1>Idor God</h1>
            <ProjectsDirectory projectsDirectory={projectsDirectory}/>
        </div>
    );
};

function IdorPage() {
    return (
        <Routes>
            <Route index element={<DisplayIdorPage/>}/>
            <Route path="symbol" element={<IdorSymbolPage/>}/>
        </Routes>
    )
};

export default IdorPage;
