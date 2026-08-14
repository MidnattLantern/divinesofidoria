import { useEffect } from "react";
import Gallery from "../../../components/Gallery/Gallery";
import { Route, Routes } from "react-router";
import PreviewMoraShrineLossless from "../../../assets/mora-assets/preview/preview-shrine-lossless.webp";
import DownloadMoraShrineLossless from "../../../assets/mora-assets/downloadable/shrine-lossless.png";
import PreviewMoraShrineEmpty from "../../../assets/mora-assets/preview/preview-shrine-empty.webp";
import DownloadMoraShrineEmpty from "../../../assets/mora-assets/downloadable/shrine-empty.png";
import ProjectsDNA from "../../../components/projectsDNA/projectsDNA";
import ProjectsDNAData from "./projectsDNA.json";

const MoraShrineItems = [
    {
        title: "Original",
        previewSource: PreviewMoraShrineLossless,
        downloadSource: DownloadMoraShrineLossless
    },
    {
        title: "Empty",
        previewSource: PreviewMoraShrineEmpty,
        downloadSource: DownloadMoraShrineEmpty
    }
];

function DisplayMoraShrinePage() {
    useEffect(() => {
        document.title = "Idoria | Mora | Shrine";
    }, []);

    return (
        <>
            <Gallery deity="Mora" projectName="Shrine" items={MoraShrineItems} goBackURLDestination="/mora-goddess"/>
            <ProjectsDNA projectName="Mora Shrine" projectsDNA={ProjectsDNAData}/>
        </>
    );
};

function MoraShrinePage() {
    return (
        <Routes>
            <Route index element={<DisplayMoraShrinePage/>}/>
        </Routes>
    );
};

export default MoraShrinePage;