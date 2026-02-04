import { useEffect } from "react";
import "./PooraatPortraitPage.css";
import Gallery from "../../../components/Gallery/Gallery";
import { Route, Routes } from "react-router";
import PreviewLossless from "../../../assets/pooraat-assets/preveiw/portrait-lossless-preview.webp";
import DownloadLossless from "../../../assets/pooraat-assets/downloadable/portrait-lossless.png";

const PooratPortraitItems = [
    {
        title: "Lossless",
        previewSource: PreviewLossless,
        downloadSource: DownloadLossless
    }
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