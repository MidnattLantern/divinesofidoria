import "./SunbawnSymbolPage.scss";
import PreviewSymbolLossless from "../../../assets/sunbawn-assets/preview/preview-symbol.webp";
import DownloadSymbolLossless from "../../../assets/sunbawn-assets/downloadable/symbol.png";
import DownloadSymbolCompressed from "../../../assets/sunbawn-assets/downloadable/symbol-compressed.jpg";
import PreviewSymbolCutout from "../../../assets/sunbawn-assets/preview/preview-symbol-cutout.webp";
import DownloadSymbolCutout from "../../../assets/sunbawn-assets/downloadable/symbol-cutout.png";
import PreviewVectorSilhouette from "../../../assets/sunbawn-assets/preview/preview-symbol-vector-silhouette.webp";
import DownloadVectorSilhouette from "../../../assets/sunbawn-assets/downloadable/symbol-vector-silhouette.svg";
import PreviewVectorOutline from "../../../assets/sunbawn-assets/preview/preview-symbol-vector-outline.webp";
import DownloadVectorOutline from "../../../assets/sunbawn-assets/downloadable/symbol-vector-outline.svg";
import { useEffect } from "react";
import Gallery from "../../../components/Gallery/Gallery";
import { Route, Routes } from "react-router";

const SunbawnSymbolItems = [
    {
        title: "Original",
        previewSource: PreviewSymbolLossless,
        downloadSource: DownloadSymbolLossless,
        useWideAspectRatio: true,
        compressedDownloadSource: DownloadSymbolCompressed
    },
    {
        title: "Cutout",
        previewSource: PreviewSymbolCutout,
        downloadSource: DownloadSymbolCutout,
        useWideAspectRatio: true,
    },
    {
        title: "Vector Silhouette",
        previewSource: PreviewVectorSilhouette,
        downloadSource: DownloadVectorSilhouette,
        useWideAspectRatio: true,
    },
    {
        title: "Vector Outline",
        previewSource: PreviewVectorOutline,
        downloadSource: DownloadVectorOutline,
        useWideAspectRatio: true,
    }
]

function DisplaySunbawnSymbolPage() {
    useEffect(() => {
        document.title = "Idoria | Sunbawn | Symbol";
    }, []);

    return (
        <Gallery deity="Sunbawn" projectName="Symbol" items={SunbawnSymbolItems}/>
    );
}

function SunbawnSymbolPage() {
    return (
        <Routes>
            <Route index element={<DisplaySunbawnSymbolPage/>}/>
        </Routes>
    )
}

export default SunbawnSymbolPage