import s from "../../App.module.css";
import type {JSX} from "react";

interface LoadMoreBtnProps {
    onClick: () => void;
}
const LoadMoreBtn = ({onClick} : LoadMoreBtnProps): JSX.Element => {
    return (
        <div>
            <button
                className={s.button}
                onClick={onClick}
                style={{display: 'flex', margin: '0 auto'}}
            >
                Load More
            </button>

        </div>
    );
};

export default LoadMoreBtn;