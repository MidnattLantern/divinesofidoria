import { useEffect } from "react";
import "./KorainTempleInterior.css";
import Gallery from "../../../components/Gallery/Gallery";
import { Route, Routes } from "react-router";
import PreviewKorainTempleInteriorLossless from "../../../assets/korain-assets/preview/preview-temple-interior-lossless.webp";
import DownloadKorainTempleInteriorLossless from "../../../assets/korain-assets/downloadable/temple-interior-lossless.png";

const KorainTempleInteriorItems = [
    {
        title: "Lossless",
        previewSource: PreviewKorainTempleInteriorLossless,
        downloadSource: DownloadKorainTempleInteriorLossless
    }
];

function DisplayKorainTempleInterior() {
    useEffect(() => {
        document.title = "Idoria | Korain | Temple Interior";
    }, []);

    return (
        <Gallery deity="Korain" projectName="Temple Interior" items={KorainTempleInteriorItems}/>
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