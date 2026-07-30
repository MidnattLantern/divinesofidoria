import { useEffect } from "react";
import Gallery from "../../../components/Gallery/Gallery";
import { Route, Routes } from "react-router";
import Preview from "../../../assets/sunbawn-assets/preview/preview-temple.webp";
import DownloadLossless from "../../../assets/sunbawn-assets/downloadable/temple.png";
import Download1MB from "../../../assets/sunbawn-assets/downloadable/temple-compressed.jpg";
import ProjectsDNA from "../../../components/projectsDNA/projectsDNA";
import projectsDNAData from "./projectsDNA.json";

const SunbawnTempleItems = [
    {
        title: "Original",
        previewSource: Preview,
        downloadSource: DownloadLossless,
        useWideAspectRatio: true,
        compressedDownloadSource: Download1MB
    }
];

function DisplaySunbawnTemplePage() {
    useEffect(() => {
        document.title = "Idoria | Sunbawn | Temple"
    }, []);

    return (
        <>
            <Gallery deity="Sunbawn" projectName="Temple" items={SunbawnTempleItems}/>
            <ProjectsDNA projectName="Temple" projectsDNA={projectsDNAData}/>
        </>
    );
};

function SunbawnTemplePage() {
    return (
        <>
            <Routes>
                <Route index element={<DisplaySunbawnTemplePage/>}/>
            </Routes>
        </>
    )
};

export default SunbawnTemplePage;