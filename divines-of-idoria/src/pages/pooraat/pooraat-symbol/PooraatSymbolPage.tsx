import "./PooraatSymbolPage.css";
import { useEffect } from "react";
import projectsDNA from "./projectsDNA.json";
import Gallery from "../../../components/Gallery/Gallery";
import PreviewFiltered from "../../../assets/pooraat-assets/preveiw/preview-filtered.webp";
import DownloadFiltered from "../../../assets/pooraat-assets/downloadable/filtered.png";
import DownloadCompressed from "../../../assets/pooraat-assets/downloadable/symbol-comporessed.jpg";
import { Route, Routes } from "react-router";
import ProjectsDNA from "../../../components/projectsDNA/projectsDNA";

const PooraatSymbolItems = [
    {
        title: "Original",
        previewSource: PreviewFiltered,
        downloadSource: DownloadFiltered,
        compressedDownloadSource: DownloadCompressed
    }
]

function DisplayPooraatSymbolPage() {
    useEffect(() => {
        document.title = "Idoria | Po'oraat | Symbol";
    }, []);

    return (
        <>
            <Gallery deity="Po'oraat" projectName="Symbol" items={PooraatSymbolItems}/>
            <ProjectsDNA projectName="Po'oraat symbol" projectsDNA={projectsDNA}/>
        </>
    );
}

function PooraatSymbolPage() {
    return (
        <Routes>
            <Route index element={<DisplayPooraatSymbolPage/>}/>
        </Routes>
    );
}

export default PooraatSymbolPage