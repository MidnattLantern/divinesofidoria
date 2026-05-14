import PreviewShrine from "../../../assets/sunbawn-assets/preview/preview-shrine.webp";
import DownloadShrineLossless from "../../../assets/sunbawn-assets/downloadable/shrine.png";
import PreviewShrineNoVines from "../../../assets/sunbawn-assets/preview/preview-shrine-no-vines.webp";
import DownloadShrineNoVinesLossless from "../../../assets/sunbawn-assets/downloadable/shrine-no-vines.png";
import { useEffect } from "react";
import Gallery from "../../../components/Gallery/Gallery";
import { Route, Routes } from "react-router";
import projectsDNA from "./projectsDNA.json";
import ProjectsDNA from "../../../components/projectsDNA/projectsDNA";

const SunbawnShrineItems = [
    {
        title: "Original",
        previewSource: PreviewShrine,
        downloadSource: DownloadShrineLossless
    },
    {
        title: "No vines",
        previewSource: PreviewShrineNoVines,
        downloadSource: DownloadShrineNoVinesLossless
    }
]

function DisplaySunbawnShrinePage() {
    useEffect(() => {
        document.title = "Idoria | Sunbawn | Shrine";
    }, []);

    return (
        <>
            <Gallery deity="Sunbawn" projectName="Shrine" items={SunbawnShrineItems}/>
            <ProjectsDNA projectName="Sunbawn shrine" projectsDNA={projectsDNA}/>
        </>
    );
}

function SunbawnShrinePage() {
    return (
        <Routes>
            <Route index element={<DisplaySunbawnShrinePage/>}/>
        </Routes>
    )
}

export default SunbawnShrinePage