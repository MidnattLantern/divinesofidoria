import { useEffect } from "react";
import { Route, Routes } from "react-router";
import Gallery from "../../../components/Gallery/Gallery";
import PreviewPortraitLossless from "../../../assets/mora-assets/preview/preview-portrait-lossless.webp";
import DownloadPortraitLossless from "../../../assets/mora-assets/downloadable/portrait-lossless.png";
import DownloadPortraitCompressed from "../../../assets/mora-assets/downloadable/portrait-compressed.jpg";
import PreviewPortraitLegacy from "../../../assets/mora-assets/preview/preview-portrait-legacy.webp";
import DownloadPortraitLegacy from "../../../assets/mora-assets/downloadable/portrait-legacy.png";
import PreviewPortraitSketch from "../../../assets/mora-assets/preview/preview-portrait-sketch.webp";
import DownloadPortraitSketch from "../../../assets/mora-assets/downloadable/portrait-sketch.png";
// import PreviewPortraitSketchLegacy from "../../../assets/mora-assets/preview/preview-portrait-sketch-legacy.webp";
// import DownloadPortraitSketchLegacy from "../../../assets/mora-assets/downloadable/portrait-sketch-legacy.png";
import ProjectsDNA from "../../../components/projectsDNA/projectsDNA";
import ProjectsDNAData from "./projectsDNA.json";

const MoraPortraitItems = [
    {
        title: "Original",
        previewSource: PreviewPortraitLossless,
        downloadSource: DownloadPortraitLossless,
        compressedDownloadSource: DownloadPortraitCompressed
    },
    {
        title: "Legacy",
        previewSource: PreviewPortraitLegacy,
        downloadSource: DownloadPortraitLegacy
    },
    {
        title: "Sketch",
        previewSource: PreviewPortraitSketch,
        downloadSource: DownloadPortraitSketch
    }
    // {
    //     title: "Sketch Legacy",
    //     previewSource: PreviewPortraitSketchLegacy,
    //     downloadSource: DownloadPortraitSketchLegacy
    // }
];

function DisplayMoraPortraitPage() {
    useEffect(() => {
        document.title = "Idoria | Mora | Portrait";
    }, []);

    return (
        <>
            <Gallery deity="Mora" projectName="Portrait" items={MoraPortraitItems} goBackURLDestination="/mora-goddess"/>
            <ProjectsDNA projectName="Mora Portrait" projectsDNA={ProjectsDNAData}/>
        </>
    );
};

function MoraPortraitPage() {
    return (
        <Routes>
            <Route index element={<DisplayMoraPortraitPage/>}/>
        </Routes>
    );
};

export default MoraPortraitPage;