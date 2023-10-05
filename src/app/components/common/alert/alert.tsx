import { ReactNode } from "react";
import local from "../../../../static/localization.json";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import BlockRoundedIcon from "@mui/icons-material/BlockRounded";
import { AlertVariant } from "../../../types/types";

interface AlertProps {
    variant: AlertVariant;
    children: ReactNode;
}

export function Alert(props: AlertProps) {
    const classVariants = {
        success: "alert-success",
        warning: "alert-warning",
        danger: "alert-danger",
    };

    return (
        <div className={`alert d-flex align-items-center ${classVariants[props.variant]}`}>
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
