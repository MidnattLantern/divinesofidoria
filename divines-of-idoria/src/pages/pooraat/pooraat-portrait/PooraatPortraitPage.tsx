import { useEffect } from "react";
import "./PooraatPortraitPage.css";
import projectsDNA from "./projectsDNA.json";
import Gallery from "../../../components/Gallery/Gallery";
import { Route, Routes } from "react-router";
import PreviewLossless from "../../../assets/pooraat-assets/preveiw/portrait-lossless-preview.webp";
import DownloadLossless from "../../../assets/pooraat-assets/downloadable/portrait-lossless.png";
import PreviewFramed from "../../../assets/pooraat-assets/preveiw/portrait-framed-preview.webp";
import DownloadFramed from "../../../assets/pooraat-assets/downloadable/portrait-framed.png";
import PreviewCutout from "../../../assets/pooraat-assets/preveiw/portrait-cutout-preview.webp";
import DownloadCutout from "../../../assets/pooraat-assets/downloadable/portrait-cutout.png";
import ProjectsDNA from "../../../components/projectsDNA/projectsDNA";

const PooratPortraitItems = [
    {
        title: "Original",
        previewSource: PreviewLossless,
        downloadSource: DownloadLossless
    },
    {
        title: "Framed",
        previewSource: PreviewFramed,
        downloadSource: DownloadFramed
    },
    {
        title: "Cutout",
        previewSource: PreviewCutout,
        downloadSource: DownloadCutout
    },
]

function DisplayPooraatPortraitPage() {
    useEffect(() => {
        document.title = "Idoria | Po'oraat | Portrait"
    }, []);

    return (
        <>
            <Gallery deity="Po'oraat" projectName="Portrait" items={PooratPortraitItems}/>
            <ProjectsDNA projectName="Po'oraat portrait" projectsDNA={projectsDNA}/>
        </>
    );
}

function PooraatPortraitPage() {
    return (
        <Routes>
            <Route index element={<DisplayPooraatPortraitPage/>}/>
        </Routes>
    );
}

export default PooraatPortraitPage