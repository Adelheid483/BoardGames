import { CSSProperties } from "react";
import BeatLoader from "react-spinners/BeatLoader";

const override: CSSProperties = {
    display: "flex",
    justifyContent: "center",
};

interface Props {
    loading: boolean;
}

export const Loader = (props: Props) => {
    return <BeatLoader color="#0d6efd" loading={props.loading} aria-label="Loading Spinner" cssOverride={override} />;
};
