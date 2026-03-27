import { useNavigate } from "react-router";
import GalleryCard from "../GalleryCard/GalleryCard";
import "./Gallery.css";
import GoBackIcon from "../../assets/vector-icons/go-back-arrow.svg?react";

interface GalleryItem {
    title: string;
    previewSource: string;
    downloadSource: string;
    useWideAspectRatio?: boolean;
    compressedDownloadSource?: string;
};

interface Props {
    deity: string;
    projectName: string;
    items: GalleryItem[];
};

function Gallery({ deity, projectName, items }: Props) {
    const navigate = useNavigate();

    return (
        <section className="gallery-view">
            <h1>
                <span>{deity}</span>
                <span>{projectName}</span>
            </h1>
            <button className="go-back-button" onClick={() => navigate(-1)}><GoBackIcon/></button>
            <ul>
                {items.map((item) => (
                    <li key={item.title}>
                        <GalleryCard
                            title={item.title}
                            previewSource={item.previewSource}
                            downloadSource={item.downloadSource}
                            useWideAspect={item.useWideAspectRatio}
                            compressedDownloadSource={item.compressedDownloadSource}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Gallery;