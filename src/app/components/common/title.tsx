import React from "react";
import { BackButton } from "./backButton";

interface Props {
    title: string;
    showBackButton?: boolean;
}

export const Title = (props: Props) => (
    <div className="title pb-2">
        <div>
            <h3>{props.title}</h3>
            {props.showBackButton && <BackButton />}
        </div>
        <hr />
    </div>
);
