import "./PooraatSymbolPage.css";
import PreviewLossless from "../../../assets/pooraat-assets/preveiw/preview-lossless.webp";
import PreviewFiltered from "../../../assets/pooraat-assets/preveiw/preview-filtered.webp";
import DownloadLossless from "../../../assets/pooraat-assets/downloadable/lossless.png";
import DownloadFiltered from "../../../assets/pooraat-assets/downloadable/filtered.png";

function PooraatSymbolPage() {
    return (
        <div className="pooraat-symbol-view">
            <h2>Po'oraat's Symbol</h2>
            <div className="cards-container">
                <section className="image-card">
                    <h3>Lossless</h3>
                    <a href={DownloadLossless} download>Download Lossless</a>
                    <img src={PreviewLossless} alt="Lossless verson" width={3000} height={3000} className="preview-image"/>
                </section>
                <section className="image-card">
                    <h3>Filtered</h3>
                    <a href={DownloadFiltered} download>Download Filtered</a>
                    <img src={PreviewFiltered} alt="Filtered version" width={3000} height={3000} className="preview-image"/>
                </section>
            </div>
        </div>
    );
};

// final tree branch

export default PooraatSymbolPage;