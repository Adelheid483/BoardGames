interface Props {
    errorMessage: string;
}

export const Error = (props: Props) => <p>{props.errorMessage}</p>;
