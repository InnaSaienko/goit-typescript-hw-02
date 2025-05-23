import ImageCard from "../ImageCard/ImageCard.jsx";
import s from "./ImageGallery.module.css"

interface ImageGalleryProps {
    photos: Photo[];
    onSelect: (select: Photo) => void;
}
const ImageGallery = ({photos, onSelect} : ImageGalleryProps ) => {
    return (
            <>
                <ul className={s.gallery}>
                    {photos.map((photo, index) => (
                        <ImageCard
                            key={index}
                            photo={photo}
                            onClick={() => onSelect(photo)}
                        />
                    ))}
                </ul>
        </>
    )
}

export default ImageGallery;