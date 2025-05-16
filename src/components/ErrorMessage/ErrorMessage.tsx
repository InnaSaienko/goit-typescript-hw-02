import type {JSX} from "react";

const ErrorMessage = (err:string): JSX.Element => {
    return (
        <div>`Error: {err}`</div>
    );
};

export default ErrorMessage;