import { useEffect } from "react";
import "./MoraTempleInteriorPage.css";
import Gallery from "../../../components/Gallery/Gallery";
import { Route, Routes } from "react-router";
import PreviewMoraTempleInteriorLossless from "../../../assets/mora-assets/preview/preview-temple-interior.webp";
import DownloadMoraTempleInteriorLossless from "../../../assets/mora-assets/downloadable/temple-interior.png";
import DownloadMoraTempleInteriorCompressed from "../../../assets/mora-assets/downloadable/temple-interior-compressed.jpg";

const MoraTempleInteriorItems = [
    {
        title: "Original",
        previewSource: PreviewMoraTempleInteriorLossless,
        downloadSource: DownloadMoraTempleInteriorLossless,
        useWideAspectRatio: true,
        compressedDownloadSource: DownloadMoraTempleInteriorCompressed
    }
];

function DisplayMoraTempleInteriorPage() {
    useEffect(() => {
        document.title = "Idoria | Mora | Interior";
    }, []);

    return (
        <Gallery deity="Mora" projectName="Temple Interior" items={MoraTempleInteriorItems}/>
    );
};

function MoraTempleInteriorPage() {
    return (
        <Routes>
            <Route index element={<DisplayMoraTempleInteriorPage/>}/>
        </Routes>
    );
};

export default MoraTempleInteriorPage;