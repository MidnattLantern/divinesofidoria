import { useEffect } from "react";
import "./MoraPortraitPage.css";
import { Route, Routes } from "react-router";
import GalleryCard from "../../../components/GalleryCard/GalleryCard";

import PreviewPortraitLossless from "../../../assets/mora-assets/preview/preview-portrait-lossless.webp";
import DownloadPortraitLossless from "../../../assets/mora-assets/downloadable/portrait-lossless.png";

function DisplayMoraPortraitPage() {
    useEffect(() => {
        document.title = "Idoria | Mora | Portrait";
    }, []);

    return (
        <section>
            <h2>Mora Goddess — Portrait</h2>
            <GalleryCard
            title="Lossless"
            previewSource={PreviewPortraitLossless}
            downloadSource={DownloadPortraitLossless}
            />
        </section>
    );
};

function MoraPortraitPage() {
    return (
        <Routes>
            <Route index element={<DisplayMoraPortraitPage/>}/>
        </Routes>
    );
};

export default MoraPortraitPage;