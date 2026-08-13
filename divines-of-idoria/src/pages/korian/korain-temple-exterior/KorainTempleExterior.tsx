import { Route, Routes } from "react-router";
import Gallery from "../../../components/Gallery/Gallery";
import PreviewKorainTempleExteriorLossless from "../../../assets/korain-assets/preview/preview-temple-exterior-lossless.webp";
import DownloadKorainTempleExteriorLossless from "../../../assets/korain-assets/downloadable/temple-exterior-lossless.png";
import DownloadKorainTempleExteriorCompressed from "../../../assets/korain-assets/downloadable/temple-exterior-compressed.jpg";
import ProjectsDNA from "../../../components/projectsDNA/projectsDNA";
import ProjectsDNAData from "./projectsDNA.json";

const KorainTempleExteriorItems = [
    {
        title: "Original",
        previewSource: PreviewKorainTempleExteriorLossless,
        downloadSource: DownloadKorainTempleExteriorLossless,
        useWideAspectRatio: true,
        compressedDownloadSource: DownloadKorainTempleExteriorCompressed
    }
];

function DisplayKorainTempleExterior() {
    return (
        <>
            <Gallery deity="Korain" projectName="Temple Exterior" items={KorainTempleExteriorItems}/>
            <ProjectsDNA projectName="Korain Temple Exterior" projectsDNA={ProjectsDNAData}/>
        </>
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