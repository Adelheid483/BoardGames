import React from "react";

interface Props {
    title: string;
}

export const Title = (props: Props) => (
    <div className="title">
        <h3>{props.title}</h3>
        <hr />
    </div>
);
