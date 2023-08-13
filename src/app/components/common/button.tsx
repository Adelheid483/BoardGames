import React, { ReactNode } from "react";

interface Props {
    class: string;
    children: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}

export const Button = (props: Props) => (
    <button type="button" className={`btn ${props.class}`} onClick={props.onClick} disabled={props.disabled}>
        {props.children}
    </button>
);
