import { useEffect } from "react";
import "./MoraTempleExteriorPage.css";
import Gallery from "../../../components/Gallery/Gallery";
import { Route, Routes } from "react-router";
import PreviewMoraTempleExteriorLossless from "../../../assets/mora-assets/preview/preview-temple-exterior.webp";
import DownloadMoraTempleExteriorLossless from "../../../assets/mora-assets/downloadable/temple-exterior.png";

const MoraTempleExteriorItems = [
    {
        title: "Lossless",
        previewSource: PreviewMoraTempleExteriorLossless,
        downloadSource: DownloadMoraTempleExteriorLossless
    }
]

function DisplayMoraTempleExteriorPage() {
    useEffect(() => {
        document.title = "Idoria | Mora | Exterior";
    }, []);

    return (
        <Gallery deity="Mora" projectName="Temple Exterior" items={MoraTempleExteriorItems}/>
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