import React from "react";
import { BackButton } from "./backButton";

interface Props {
    title: string;
    hideBackButton?: boolean;
}

export const Title = (props: Props) => (
    <div className="title">
        <div>
            <h3>{props.title}</h3>
            {!props.hideBackButton && <BackButton />}
        </div>
        <hr />
    </div>
);
