import { useEffect } from "react";
import Gallery from "../../../components/Gallery/Gallery";
import { Route, Routes } from "react-router";
import PreviewIdorShrinePreview from "../../../assets/idor-assets/preview/idor-shrine-preveiw.webp";
import DownloadIdorShrineLossless from "../../../assets/idor-assets/downloadable/idor-shrine-lossless.png";
import DownloadIdorShrineCompressed from "../../../assets/idor-assets/downloadable/idor-shrine-1mb.jpg";
import ProjectsDNA from "../../../components/projectsDNA/projectsDNA";
import ProjectsDNAData from "./projectsDNA.json";

const IdorShrineItems = [
    {
        title: "Original",
        previewSource: PreviewIdorShrinePreview,
        downloadSource: DownloadIdorShrineLossless,
        compressedDownloadSource: DownloadIdorShrineCompressed
    }
]

function DisplayIdorShrinePage() {
    useEffect(() => {
        document.title = "Idoria | Idor | Shrine";
    }, []);

    return (
        <>
            <Gallery deity="Idor" projectName="Shrine" items={IdorShrineItems} goBackURLDestination="/Idor-god"/>
            <ProjectsDNA projectName="Idor Shrine" projectsDNA={ProjectsDNAData}/>
        </>
    )
};

function IdorShrinePage() {
    return (
        <Routes>
            <Route index element={<DisplayIdorShrinePage/>}/>
        </Routes>
    )
};

export default IdorShrinePage;