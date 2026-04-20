import { Route, Routes } from "react-router";
import Gallery from "../../../components/Gallery/Gallery";
import "./KorainTempleExterior.css";
import PreviewKorainTempleExteriorLossless from "../../../assets/korain-assets/preview/preview-temple-exterior-lossless.webp";
import DownloadKorainTempleExteriorLossless from "../../../assets/korain-assets/downloadable/temple-exterior-lossless.png";

const KorainTempleExteriorItems = [
    {
        title: "Original",
        previewSource: PreviewKorainTempleExteriorLossless,
        downloadSource: DownloadKorainTempleExteriorLossless,
        useWideAspectRatio: true
    }
];

function DisplayKorainTempleExterior() {
    return (
        <Gallery deity="Korain" projectName="Temple Exterior" items={KorainTempleExteriorItems}/>
    );
};

function KorainTempleExterior() {
    return (
        <Routes>
            <Route index element={<DisplayKorainTempleExterior/>}/>
        </Routes>
    );
};

export default KorainTempleExterior;