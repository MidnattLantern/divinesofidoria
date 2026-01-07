import "./PooraatSymbolPage.css";
import { useEffect } from "react";
import Gallery from "../../../components/Gallery/Gallery";
import PreviewLossless from "../../../assets/pooraat-assets/preveiw/preview-lossless.webp";
import DownloadLossless from "../../../assets/pooraat-assets/downloadable/lossless.png";
import PreviewFiltered from "../../../assets/pooraat-assets/preveiw/preview-filtered.webp";
import DownloadFiltered from "../../../assets/pooraat-assets/downloadable/filtered.png";
import { Route, Routes } from "react-router";

const PooraatSymbolItems = [
    {
        title: "Lossless",
        previewSource: PreviewLossless,
        downloadSource: DownloadLossless
    },
    {
        title: "Filtered",
        previewSource: PreviewFiltered,
        downloadSource: DownloadFiltered
    }
];

function DisplayPooraatSymbolPage() {
    useEffect(() => {
        document.title = "Idoria | Po'oraat | Symbol";
    }, []);

    return (
        <Gallery deity="Po'oraat" projectName="Symbol" items={PooraatSymbolItems}/>
    );
};

function PooraatSymbolPage() {
    return (
        <Routes>
            <Route index element={<DisplayPooraatSymbolPage/>}/>
        </Routes>
    );
};

export default PooraatSymbolPage;