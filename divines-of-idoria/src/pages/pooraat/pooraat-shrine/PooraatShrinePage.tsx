import { Route, Routes } from "react-router";
import "./PooraatShrinePage.css";
import { useEffect } from "react";
import Gallery from "../../../components/Gallery/Gallery";
import PreviewOriginal from "../../../assets/pooraat-assets/preveiw/preview-shrine-original.webp";
import DownloadOriginal from "../../../assets/pooraat-assets/downloadable/shrine-original.png";
import PreviewNoItems from "../../../assets/pooraat-assets/preveiw/preview-shrine-empty.webp";
import DownloadNoItems from "../../../assets/pooraat-assets/downloadable/shrine-empty.png";

const PooraatShrineItems = [
    {
        title: "Original",
        previewSource: PreviewOriginal,
        downloadSource: DownloadOriginal
    },
    {
        title: "No items",
        previewSource: PreviewNoItems,
        downloadSource: DownloadNoItems
    }
]

function DisplayPooraatShrinePage() {
    useEffect(() => {
        document.title = "Idoria | Po'oraat | Shrine"
    }, []);

    return (
        <Gallery deity="Po'orat" projectName="Shrine" items={PooraatShrineItems} goBackURLDestination="/pooraat-god"/>
    )
}

function PooraatShrinePage() {
    return (
        <Routes>
            <Route index element={<DisplayPooraatShrinePage/>}/>
        </Routes>
    );
};

// final tree branch

export default PooraatShrinePage;