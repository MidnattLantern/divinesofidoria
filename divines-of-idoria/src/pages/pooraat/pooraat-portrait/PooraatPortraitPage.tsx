import { useEffect } from "react";
import "./PooraatPortraitPage.css";
import Gallery from "../../../components/Gallery/Gallery";
import { Route, Routes } from "react-router";
import PreviewLossless from "../../../assets/pooraat-assets/preveiw/portrait-lossless-preview.webp";
import DownloadLossless from "../../../assets/pooraat-assets/downloadable/portrait-lossless.png";
import PreviewNoFilter from "../../../assets/pooraat-assets/preveiw/portrait-no-filter-preview.webp";
import DownloadNoFilter from "../../../assets/pooraat-assets/downloadable/portrait-no-filter.png";
import PreviewFramed from "../../../assets/pooraat-assets/preveiw/portrait-framed-preview.webp";
import DownloadFramed from "../../../assets/pooraat-assets/downloadable/portrait-framed.png";
import PreviewFramedNoFilter from "../../../assets/pooraat-assets/preveiw/framed-no-filter-preview.webp";
import DownloadFramedNoFilter from "../../../assets/pooraat-assets/downloadable/portrait-no-filter-framed.png";
import PreviewCutout from "../../../assets/pooraat-assets/preveiw/portrait-cutout-preview.webp";
import DownloadCutout from "../../../assets/pooraat-assets/downloadable/portrait-cutout.png";

const PooratPortraitItems = [
    {
        title: "Lossless",
        previewSource: PreviewLossless,
        downloadSource: DownloadLossless
    },
    {
        title: "No filter",
        previewSource: PreviewNoFilter,
        downloadSource: DownloadNoFilter
    },
    {
        title: "Framed",
        previewSource: PreviewFramed,
        downloadSource: DownloadFramed
    },
    {
        title: "Framed no filter",
        previewSource: PreviewFramedNoFilter,
        downloadSource: DownloadFramedNoFilter
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
        <Gallery deity="Po'oraat" projectName="Portrait" items={PooratPortraitItems}/>
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