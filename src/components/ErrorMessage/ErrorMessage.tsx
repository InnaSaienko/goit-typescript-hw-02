import type {JSX} from "react";

type ErrorMessageProps = {
    err: string;
};

const ErrorMessage = ({err} : ErrorMessageProps): JSX.Element => {
    return (
        <div>`Error: {err}`</div>
    );
};

export default ErrorMessage;