import React from "react";

interface Props {
    onClick: () => void;
}

export const ResetButton = (props: Props) => (
    <button type="button" className="btn btn-outline-primary" onClick={props.onClick}>
        Reset Match
    </button>
);
