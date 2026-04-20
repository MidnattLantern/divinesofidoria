import { useEffect } from "react";
import "./KorainTempleInterior.css";
import projectsDNA from "./projectsDNA.json";
import Gallery from "../../../components/Gallery/Gallery";
import { Route, Routes } from "react-router";
import PreviewKorainTempleInteriorLossless from "../../../assets/korain-assets/preview/preview-temple-interior-lossless.webp";
import DownloadKorainTempleInteriorLossless from "../../../assets/korain-assets/downloadable/temple-interior-lossless.png";
import DownloadKorainTempleInteriorCompressed from "../../../assets/korain-assets/downloadable/temple-interior-compressed.jpg";
import ProjectsDNA from "../../../components/projectsDNA/projectsDNA";

const KorainTempleInteriorItems = [
    {
        title: "Original",
        previewSource: PreviewKorainTempleInteriorLossless,
        downloadSource: DownloadKorainTempleInteriorLossless,
        useWideAspectRatio: true,
        compressedDownloadSource: DownloadKorainTempleInteriorCompressed
    }
];

function DisplayKorainTempleInterior() {
    useEffect(() => {
        document.title = "Idoria | Korain | Temple Interior";
    }, []);

    return (
        <>
           <Gallery deity="Korain" projectName="Temple Interior" items={KorainTempleInteriorItems}/>
           <ProjectsDNA projectName="Korain temple interior" projectsDNA={projectsDNA}/>
        </>
    );
};

function KorainTempleInterior() {
    return (
        <Routes>
            <Route index element={<DisplayKorainTempleInterior/>}/>
        </Routes>
    );
};

export default KorainTempleInterior;