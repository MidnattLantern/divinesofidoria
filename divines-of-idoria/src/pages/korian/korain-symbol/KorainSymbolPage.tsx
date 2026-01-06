import { useEffect } from "react";
import "./KorainSymbolPage.css";
import Gallery from "../../../components/Gallery/Gallery";
import { Route, Routes } from "react-router";
import PreviewKorainSymbolLossless from "../../../assets/korain-assets/preview/preview-symbol-lossless.webp";
import DownloadKorainSymbolLossless from "../../../assets/korain-assets/downloadable/symbol-lossless.png"

const KorainSymbolItems = [
    {
        title: "Lossless",
        previewSource: PreviewKorainSymbolLossless,
        downloadSource: DownloadKorainSymbolLossless
    }
];

function DisplayKorainSymbolPage() {
    useEffect(() => {
        document.title = "Idoria | Korain | Symbol";
    }, []);

    return (
        <Gallery deity="Korain" projectName="Symbol" items={KorainSymbolItems}/>
    )
};

function KorainSymbolPage() {
    return (
        <Routes>
            <Route index element={<DisplayKorainSymbolPage/>}/>
        </Routes>
    );
};

export default KorainSymbolPage;