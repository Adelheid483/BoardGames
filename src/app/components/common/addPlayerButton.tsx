import React from "react";

interface Props {
    onClick: () => void;
}

export const AddPlayerButton = (props: Props) => (
    <button type="button" className="btn btn-secondary" onClick={props.onClick}>
        Add Player
    </button>
);
