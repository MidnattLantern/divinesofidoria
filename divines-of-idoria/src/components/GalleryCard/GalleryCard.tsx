import "./GalleryCard.css";

interface Props {
    title: string;
    previewSource: string;
    downloadSource: string;
    useWideAspect?: boolean;
};

function GalleryCard({ title, previewSource, downloadSource, useWideAspect }: Props) {
    return (
        <figure className={`${`gallery-card-view`} ${useWideAspect && `use-wide-aspect`}`}>
            <img src={previewSource} alt="" loading="lazy"/>
            <figcaption>{title}</figcaption>
            <a href={downloadSource} download>{`Download ${title}`}</a>
        </figure>
    );
};

export default GalleryCard;