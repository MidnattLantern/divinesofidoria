import { useEffect } from "react";
import { Route, Routes } from "react-router";
import Gallery from "../../../components/Gallery/Gallery";
import PreviewOriginal from "../../../assets/sunbawn-assets/preview/preview-portrait.webp";
import DownloadLosslessOriginal from "../../../assets/sunbawn-assets/downloadable/portrait.png";
import Download1MBOriginal from "../../../assets/sunbawn-assets/downloadable/portrait-compressed.jpg";

const SunbawnPortraitItems = [
    {
        title: "Original",
        previewSource: PreviewOriginal,
        downloadSource: DownloadLosslessOriginal,
        compressedDownloadSource: Download1MBOriginal
    }
]

function DisplaySunbawnPortraitPage() {
    useEffect(() => {
        document.title = "Idoria | Sunbawn | Portrait";
    }, []);

    return (
        <>
            <Gallery deity="Sunbawn" projectName="Portrait" items={SunbawnPortraitItems}/>
        </>
    )
}

function SunbawnPortraitPage() {
    return (
        <Routes>
            <Route index element={<DisplaySunbawnPortraitPage/>}/>
        </Routes>
    )
}

export default SunbawnPortraitPage