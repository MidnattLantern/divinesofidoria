import "./GalleryCard.css";

interface Props {
    title: string;
    previewSource: string;
    downloadSource: string;
};

function GalleryCard({ title, previewSource, downloadSource }: Props) {
    return (
        <figure className="gallery-card-view">
            <img src={previewSource} alt="" loading="lazy"/>
            <figcaption>{title}</figcaption>
            <a href={downloadSource} download>{`Download ${title}`}</a>
        </figure>
    );
};

export default GalleryCard;