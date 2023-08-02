import React from "react";

interface Props {
    onClick: () => void;
}

export const SaveButton = (props: Props) => (
    <button type="button" className="btn btn-success" onClick={props.onClick}>
        Save
    </button>
);
