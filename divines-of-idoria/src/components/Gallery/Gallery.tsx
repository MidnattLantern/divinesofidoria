import GalleryCard from "../GalleryCard/GalleryCard";
import "./Gallery.css";

interface GalleryItem {
    title: string;
    previewSource: string;
    downloadSource: string;
};

interface Props {
    deity: string;
    projectName: string;
    items: GalleryItem[];
};

function Gallery({ deity, projectName, items }: Props) {

    return (
        <section className="gallery-view">
            <h1>
                <span>{deity}</span>
                <span>{projectName}</span>
            </h1>
            <ul>
                {items.map((item) => (
                    <li key={item.title}>
                        <GalleryCard
                            title={item.title}
                            previewSource={item.previewSource}
                            downloadSource={item.downloadSource}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Gallery;