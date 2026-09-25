import { useEffect } from "react";
import Gallery from "../../../components/Gallery/Gallery";
import { Route, Routes } from "react-router";
import PreviewIdorSymbolLossless from "../../../assets/idor-assets/preview/idor-symbol-preview.webp";
import DownloadIdorSymbolLossless from "../../../assets/idor-assets/downloadable/idor-symbol-lossless.png";
import DownloadIdorSymbolCompressed from "../../../assets/idor-assets/downloadable/idor-symbol-1mb.jpg";
import PrewviewIdorSymbolCutout from "../../../assets/idor-assets/preview/idor-symbol-cutout-preveiw.webp";
import DownloadIdorSymbolCutout from "../../../assets/idor-assets/downloadable/idor-symbol-cutout.png";
import ProjectsDNA from "../../../components/projectsDNA/projectsDNA";
import ProjectsDNAData from "./projectsDNA.json";

const IdorSymbolItems = [
    {
        title: "Original",
        previewSource: PreviewIdorSymbolLossless,
        downloadSource: DownloadIdorSymbolLossless,
        compressedDownloadSource: DownloadIdorSymbolCompressed
    },
    {
        title: "Cutout",
        previewSource: PrewviewIdorSymbolCutout,
        downloadSource: DownloadIdorSymbolCutout
    }
];

function DisplayIdorSymbolPage() {
    useEffect(() => {
        document.title = "Idoria | Idor | Symbol";
    }, []);

    return (
        <>
            <Gallery deity="Idor" projectName="Symbol" items={IdorSymbolItems} goBackURLDestination="/Idor-god"/>
            <ProjectsDNA projectName="Idor Symbol" projectsDNA={ProjectsDNAData}/>
        </>
    )
};

function IdorSymbolPage() {
    return (
        <Routes>
            <Route index element={<DisplayIdorSymbolPage/>}/>
        </Routes>
    );
};

export default IdorSymbolPage;