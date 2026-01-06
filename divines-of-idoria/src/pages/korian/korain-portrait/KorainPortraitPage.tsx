import { useEffect } from "react";
import "./KorainPortraitPage.css";
import Gallery from "../../../components/Gallery/Gallery";
import { Route, Routes } from "react-router";
import PreviewKorainPortraitLossless from "../../../assets/korain-assets/preview/preview-portrait-lossless.webp";
import DownloadKorainPortraitLossless from "../../../assets/korain-assets/downloadable/portrait-lossless.png";
import PreviewKorainPortraitNoFilter from "../../../assets/korain-assets/preview/preview-portrait-no-filter.webp";
import DownloadKorainPortraitNoFilter from "../../../assets/korain-assets/downloadable/portrait-no-filter.png";
import PreviewKorainPortraitNoPaint from "../../../assets/korain-assets/preview/preview-portrait-no-paint.webp";
import DownloadKorainPortraitNoPaint from "../../../assets/korain-assets/downloadable/portrait-no-paint.png";

const KorainPortraitItems = [
    {
        title: "Lossless",
        previewSource: PreviewKorainPortraitLossless,
        downloadSource: DownloadKorainPortraitLossless
    },
    {
        title: "No Filter",
        previewSource: PreviewKorainPortraitNoFilter,
        downloadSource: DownloadKorainPortraitNoFilter
    },
    {
        title: "No Paint",
        previewSource: PreviewKorainPortraitNoPaint,
        downloadSource: DownloadKorainPortraitNoPaint
    }
];

function DisplayKorainPortraitPage() {
    useEffect(() => {
        document.title = "Idoria | Korain | Portrait";
    }, []);

    return (
        <Gallery deity="Korain" projectName="Portrait" items={KorainPortraitItems}/>
    );
};

function KorainPortraitPage() {
    return (
        <Routes>
            <Route index element={<DisplayKorainPortraitPage/>}/>
        </Routes>
    );
};

export default KorainPortraitPage;