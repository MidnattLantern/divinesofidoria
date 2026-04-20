import "./GalleryCard.css";

interface IProps {
    title: string;
    previewSource: string;
    downloadSource: string;
    useWideAspect?: boolean;
    compressedDownloadSource?: string;
};

function GalleryCard({ title, previewSource, downloadSource, useWideAspect, compressedDownloadSource }: IProps) {
    return (
        <figure className={`${`gallery-card-view`} ${useWideAspect && `use-wide-aspect`}`}>
            <img src={previewSource} alt="" loading="lazy"/>
            <figcaption>{title}</figcaption>
            <a href={downloadSource} download>{`Download ${title} Lossless`}</a>
            {compressedDownloadSource && <a href={compressedDownloadSource} download className={"compressed-download-button"}>{`Download ${title} Compressed (1 MB)`}</a>}
        </figure>
    );
};

export default GalleryCard;