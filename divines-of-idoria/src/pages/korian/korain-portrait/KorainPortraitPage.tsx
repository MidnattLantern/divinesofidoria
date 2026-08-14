import { useEffect } from "react";
import Gallery from "../../../components/Gallery/Gallery";
import { Route, Routes } from "react-router";
import PreviewKorainPortraitLossless from "../../../assets/korain-assets/preview/preview-portrait-lossless.webp";
import DownloadKorainPortraitLossless from "../../../assets/korain-assets/downloadable/portrait-lossless.png";
import DownloadKorainPortraitCompressed from "../../../assets/korain-assets/downloadable/portrait-compressed.jpg";
import PreviewKorainPortraitNoPaint from "../../../assets/korain-assets/preview/preview-portrait-no-paint.webp";
import DownloadKorainPortraitNoPaint from "../../../assets/korain-assets/downloadable/portrait-no-paint.png";
import ProjectsDNA from "../../../components/projectsDNA/projectsDNA";
import ProjectsDNAData from "./projectsDNA.json";

const KorainPortraitItems = [
    {
        title: "Original",
        previewSource: PreviewKorainPortraitLossless,
        downloadSource: DownloadKorainPortraitLossless,
        compressedDownloadSource: DownloadKorainPortraitCompressed
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
        <>
            <Gallery deity="Korain" projectName="Portrait" items={KorainPortraitItems} goBackURLDestination="/korain-god"/>
            <ProjectsDNA projectName="Korain Portrait" projectsDNA={ProjectsDNAData}/>
        </>
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