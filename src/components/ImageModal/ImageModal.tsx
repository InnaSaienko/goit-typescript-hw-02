import s from "./ImageModal.module.css";
import Modal from 'react-modal';
import type {JSX} from "react";

interface ImageModalProps {
    onClose: () => void;
    photo: Photo;
}

const ImageModal = ({onClose, photo} : ImageModalProps) : JSX.Element => {
    const {urls: {regular: image}, alt_description, description} = photo;

    const customStyles = {
        content: {
            width: "60vw",
            height: "60vh",
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%) scale(1)',
            background: "transparent",
            border: "none",
            overflow: "hidden",
        },
    };

    return (
        <Modal
            isOpen={true}
            onRequestClose={onClose}
            contentLabel="Image Modal"
            appElement={document.body}
            closeTimeoutMS={200}
            style={customStyles}
            overlayClassName={s.backgroundOverlay}
        >
            <div className={s.popupClose} onClick={onClose}></div>
            <div className={s.popupContent}>
                <span className={s.description}>{description || alt_description.charAt(0).toUpperCase() || "No description available"}</span>
                <div className={s.popupImage}>
                    <img src={image} alt={alt_description}/>
                </div>
            </div>
        </Modal>
    );
};

export default ImageModal;