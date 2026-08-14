import { useEffect } from "react";
import Gallery from "../../../components/Gallery/Gallery";
import { Route, Routes } from "react-router";
import PreviewMoraTempleExteriorLossless from "../../../assets/mora-assets/preview/preview-temple-exterior.webp";
import DownloadMoraTempleExteriorLossless from "../../../assets/mora-assets/downloadable/temple-exterior.png";
import DownloadMoraTempleExteriorCompressed from "../../../assets/mora-assets/downloadable/temple-exterior-compressed.jpg";
import ProjectsDNA from "../../../components/projectsDNA/projectsDNA";
import ProjectsDNAData from "./projectsDNA.json";

const MoraTempleExteriorItems = [
    {
        title: "Original",
        previewSource: PreviewMoraTempleExteriorLossless,
        downloadSource: DownloadMoraTempleExteriorLossless,
        useWideAspectRatio: true,
        compressedDownloadSource: DownloadMoraTempleExteriorCompressed
    }
]

function DisplayMoraTempleExteriorPage() {
    useEffect(() => {
        document.title = "Idoria | Mora | Exterior";
    }, []);

    return (
        <>
            <Gallery deity="Mora" projectName="Temple Exterior" items={MoraTempleExteriorItems} goBackURLDestination="/mora-goddess"/>
            <ProjectsDNA projectName="More Temple Exterior" projectsDNA={ProjectsDNAData}/>
        </>
    );
};

function MoraTempleExteriorPage() {
    return (
        <Routes>
            <Route index element={<DisplayMoraTempleExteriorPage/>}/>
        </Routes>
    );
};

export default MoraTempleExteriorPage;