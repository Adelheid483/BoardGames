import React from "react";
import { BackButton } from "./backButton";

interface Props {
    title: string;
    showBackButton?: boolean;
}

export const Title = (props: Props) => (
    <div className="pb-2">
        <div className="d-flex justify-content-between">
            <h3>{props.title}</h3>
            {props.showBackButton && <BackButton />}
        </div>
        <hr />
    </div>
);
