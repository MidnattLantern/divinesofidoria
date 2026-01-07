import { Route, Routes } from "react-router";
import Gallery from "../../../components/Gallery/Gallery";
import "./KorainTempleExterior.css";
import PreviewKorainTempleExteriorLossless from "../../../assets/korain-assets/preview/preview-temple-exterior-lossless.webp";
import DownloadKorainTempleExteriorLossless from "../../../assets/korain-assets/downloadable/temple-exterior-lossless.png";
import PreviewKorainTempleExteriorNoFilter from "../../../assets/korain-assets/preview/preview-temple-exterior-no-filter.webp";
import DownloadKorainTempleExteriorNoFilter from "../../../assets/korain-assets/downloadable/temple-exterior-no-filter.png";

const KorainTempleExteriorItems = [
    {
        title: "Lossless",
        previewSource: PreviewKorainTempleExteriorLossless,
        downloadSource: DownloadKorainTempleExteriorLossless,
        useWideAspectRatio: true
    },
    {
        title: "No Filter",
        previewSource: PreviewKorainTempleExteriorNoFilter,
        downloadSource: DownloadKorainTempleExteriorNoFilter,
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