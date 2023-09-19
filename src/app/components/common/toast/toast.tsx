import React, { ReactNode } from "react";
import local from "../../../../static/localization.json";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import BlockRoundedIcon from "@mui/icons-material/BlockRounded";
import { ToastVariant } from "../../../types/types";

interface ToastProps {
    variant: ToastVariant;
    children: ReactNode;
}

export function Toast(props: ToastProps) {
    const classVariants = {
        success: "toast-success",
        warning: "toast-warning",
        danger: "toast-danger",
    };

    return (
        <div className={`toast-box ${classVariants[props.variant]}`}>
            <span className="me-2">
                {props.variant === "success" ? (
                    <CheckCircleOutlineRoundedIcon />
                ) : props.variant === "warning" ? (
                    <ErrorOutlineRoundedIcon />
                ) : (
                    <BlockRoundedIcon />
                )}
            </span>
            <span>{props.variant === "success" ? local.SuccessMessage : props.children}</span>
        </div>
    );
}
