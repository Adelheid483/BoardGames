import React, { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
}

export const Modal = (props: Props) => {
    return (
        <>
            {props.isOpen && (
                <div className="modal-overlay" onClick={props.toggle}>
                    <div onClick={(e) => e.stopPropagation()} className="modal-box">
                        {props.children}
                    </div>
                </div>
            )}
        </>
    );
};
