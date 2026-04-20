import { useEffect } from "react";
import "./MoraSymbolPage.css";
import { Route, Routes } from "react-router";
import Gallery from "../../../components/Gallery/Gallery";
import PreviewSymbolLossless from "../../../assets/mora-assets/preview/preview-icon.webp";
import DownloadSymbolLossless from "../../../assets/mora-assets/downloadable/icon.png";
import DownloadSymbolCompressed from "../../../assets/mora-assets/downloadable/icon-compressed.jpg";

const MoraSymbolItems = [
    {
        title: "Original",
        previewSource: PreviewSymbolLossless,
        downloadSource: DownloadSymbolLossless,
        compressedDownloadSource: DownloadSymbolCompressed
    }
];

function DisplayMoraSymbolPage() {
    useEffect(() => {
        document.title = "Idoria | Mora | Symbol";
    }, []);

    return (
        <Gallery deity="Mora" projectName="Symbol" items={MoraSymbolItems}/>
    );
};

function MoraSymbolPage() {
    return (
        <Routes>
            <Route index element={<DisplayMoraSymbolPage/>}/>
        </Routes>
    );
};

export default MoraSymbolPage;