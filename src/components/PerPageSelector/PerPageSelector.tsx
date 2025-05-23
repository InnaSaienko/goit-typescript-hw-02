import s from './PerPageSelector.module.css';
import type {JSX} from "react";

interface PerPageSelectorProps {
    perPage: number;
    onChange: (perPage: number) => void;
}

const PerPageSelector = ({perPage, onChange}: PerPageSelectorProps): JSX.Element => {
    return (
        <div className={s.perPage}>
            <select
                value={perPage}
                onChange={(e) => onChange(Number(e.target.value))}
                className={s.perPageSelector}>
                <option value='10'>10</option>
                <option value='20'>20</option>
                <option value='30'>30</option>
                <option value='40'>40</option>
            </select>
        </div>
    );
};

export default PerPageSelector;