import "./PooraatTemplePage.css";
import Gallery from "../../../components/Gallery/Gallery";
import Preview from "../../../assets/pooraat-assets/preveiw/pooraat-temple-preview.webp";
import DownloadLosless from "../../../assets/pooraat-assets/downloadable/pooraat-temple-lossless.png";
import Download1MB from "../../../assets/pooraat-assets/downloadable/pooraat-temple-1mb.jpg";
import { Route, Routes } from "react-router";
import { useEffect } from "react";

const PooraatTempleItems = [
    {
        title: "Original",
        previewSource: Preview,
        downloadSource: DownloadLosless,
        useWideAspectRatio: true,
        compressedDownloadSource: Download1MB
    }
]

function DisplayPooraatTemplePage() {
    useEffect(() => {
        document.title = "Idoria | Po'oraat | Temple";
    }, []);

    return (
        <Gallery deity="Po'oraat" projectName="Temple" items={PooraatTempleItems}/>
    );
}

function PooraatTemplePage() {
    return (
        <>
            <Routes>
                <Route index element={<DisplayPooraatTemplePage/>}/>
            </Routes>
        </>
    );
};

export default PooraatTemplePage;