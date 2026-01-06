import { useEffect } from "react";
import "./KorainShrinePage.css";
import Gallery from "../../../components/Gallery/Gallery";
import { Route, Routes } from "react-router";
import PreviewKorainShrineLossless from "../../../assets/korain-assets/preview/preview-shrine-lossless.webp";
import DownloadKorainShrineLossless from "../../../assets/korain-assets/downloadable/shrine-lossless.png";
import PreviewKorainShrineEmpty from "../../../assets/korain-assets/preview/preview-shrine-empty.webp";
import DownloadKorainShrineEmpty from "../../../assets/korain-assets/downloadable/shrine-empty.png";

const KorainShrineItems = [
    {
        title: "Lossless",
        previewSource: PreviewKorainShrineLossless,
        downloadSource: DownloadKorainShrineLossless
    },
    {
        title: "Empty",
        previewSource: PreviewKorainShrineEmpty,
        downloadSource: DownloadKorainShrineEmpty
    }
];

function DisplayKorainShrinePage() {
    useEffect(() => {
        document.title = "Idoria | Korain | Shrine";
    }, []);

    return (
        <Gallery deity="Korain" projectName="Shrine" items={KorainShrineItems}/>
    );
};

function KorainShrinePage() {
    return (
        <Routes>
            <Route index element={<DisplayKorainShrinePage/>}/>
        </Routes>
    );
};

export default KorainShrinePage;