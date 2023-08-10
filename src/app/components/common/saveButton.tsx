import React from "react";

interface Props {
    name: string;
}

export const SaveButton = (props: Props) => <button className="btn btn-success">{props.name}</button>;
