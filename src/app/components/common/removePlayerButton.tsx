import React from "react";

interface Props {
    onClick: () => void;
}

export const RemovePlayerButton = (props: Props) => (
    <button type="button" className="btn btn-secondary" onClick={props.onClick}>
        Remove Player
    </button>
);
