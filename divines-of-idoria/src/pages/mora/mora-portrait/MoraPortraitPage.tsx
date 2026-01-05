import { useEffect } from "react";
import "./MoraPortraitPage.css";
import { Route, Routes } from "react-router";
import GalleryCard from "../../../components/GalleryCard/GalleryCard";

import PreviewPortraitLossless from "../../../assets/mora-assets/preview/preview-portrait-lossless.webp";
import DownloadPortraitLossless from "../../../assets/mora-assets/downloadable/portrait-lossless.png";
import PreviewPortraitLegacy from "../../../assets/mora-assets/preview/preview-portrait-legacy.webp";
import DownloadPortraitLegacy from "../../../assets/mora-assets/downloadable/portrait-legacy.png";
import PreviewPortraitSketch from "../../../assets/mora-assets/preview/preview-portrait-sketch.webp";
import DownloadPortraitSketch from "../../../assets/mora-assets/downloadable/portrait-sketch.png";
import PreviewPortraitSketchLegacy from "../../../assets/mora-assets/preview/preview-portrait-sketch-legacy.webp";
import DownloadPortraitSketchLegacy from "../../../assets/mora-assets/downloadable/portrait-sketch-legacy.png";

function DisplayMoraPortraitPage() {
    useEffect(() => {
        document.title = "Idoria | Mora | Portrait";
    }, []);

    return (
        <section className="gallery-view">
            <h1><span>Mora Goddess</span><span>Portrait</span></h1>
            <ul>
                <li>
                    <GalleryCard
                    title="Lossless"
                    previewSource={PreviewPortraitLossless}
                    downloadSource={DownloadPortraitLossless}
                    />
                </li>
                <li>
                    <GalleryCard
                    title="Legacy"
                    previewSource={PreviewPortraitLegacy}
                    downloadSource={DownloadPortraitLegacy}
                    />
                </li>
                <li>
                    <GalleryCard
                    title="Sketch"
                    previewSource={PreviewPortraitSketch}
                    downloadSource={DownloadPortraitSketch}
                    />
                </li>
                <li>
                    <GalleryCard
                    title="Sketch Legacy"
                    previewSource={PreviewPortraitSketchLegacy}
                    downloadSource={DownloadPortraitSketchLegacy}
                    />
                </li>
            </ul>
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