import { useEffect } from "react";
import "./MoraShrinePage.css";
import Gallery from "../../../components/Gallery/Gallery";
import { Route, Routes } from "react-router";
import PreviewMoraShrineLossless from "../../../assets/mora-assets/preview/preview-shrine-lossless.webp";
import DownloadMoraShrineLossless from "../../../assets/mora-assets/downloadable/shrine-lossless.png";
import PreviewMoraShrineEmpty from "../../../assets/mora-assets/preview/preview-shrine-empty.webp";
import DownloadMoraShrineEmpty from "../../../assets/mora-assets/downloadable/shrine-empty.png";

const MoraShrineItems = [
    {
        title: "Lossless",
        previewSource: PreviewMoraShrineLossless,
        downloadSource: DownloadMoraShrineLossless,
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
        <Gallery deity="Mora" projectName="Shrine" items={MoraShrineItems}/>
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