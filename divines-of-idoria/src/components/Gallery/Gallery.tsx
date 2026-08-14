import { NavLink } from "react-router";
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
    goBackURLDestination: string
};

// NOTE: Don't forget the / for URL destination
function Gallery({ deity, projectName, items, goBackURLDestination}: Props) {

    return (
        <section className="gallery-view">
            <h1>
                <span>{deity}</span>
                <span>{projectName}</span>
            </h1>
            <NavLink className="go-back-button" to={goBackURLDestination}><GoBackIcon/></NavLink>
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