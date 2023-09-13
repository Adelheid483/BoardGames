import React, { ReactNode } from "react";
import { Button } from "../button";
import { Title } from "../title";
import local from "../../../../static/localization.json";

interface Props {
    children: ReactNode;
    title: string;
    isOpen: boolean;
    toggle: () => void;
}

export const Modal = (props: Props) => {
    return (
        <>
            {props.isOpen && (
                <div className="modal-overlay" onClick={props.toggle}>
                    <div onClick={(e) => e.stopPropagation()} className="modal-box">
                        <Title title={props.title} />
                        <div className="modal-content mb-3">{props.children}</div>
                        <div className="d-flex justify-content-end">
                            <Button class="btn-outline-primary" onClick={props.toggle} children={local.Close} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
