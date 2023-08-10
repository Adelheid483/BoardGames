import React from "react";

interface Props {
    name: string;
    onClick: () => void;
    isShown: boolean;
}

export const PlayerActionButton = (props: Props) => (
    <button type="button" disabled={!props.isShown} className="btn btn-outline-secondary" onClick={props.onClick}>
        {props.name}
    </button>
);
