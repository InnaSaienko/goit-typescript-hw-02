import {type JSX} from 'react';
import s from "./ImageCard.module.css";
import {formattedDate, formattedName} from "../../utils/utils.js";

interface ImageCardProps {
    photo: Photo;
    onClick: () => void;
}

const ImageCard = ({photo, onClick}: ImageCardProps) : JSX.Element => {
    const {urls, alt_description, user, created_at} = photo;
    const authorName = formattedName(user.first_name);
    return (<>
        <div className={s.g_item}>
            <img className={s.g_item__img} src={urls.small} onClick={onClick} alt={alt_description}/>
            <div className={s.g_item__title}>
                <span className={s.g_item__author}>{authorName}</span>
                <span className={s.g_item__date}>{formattedDate(created_at)}</span>
            </div>
        </div>
    </>)
};


export default ImageCard;