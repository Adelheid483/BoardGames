import React from "react";
import { ValidationMessage } from "./validationMessage";

interface Props {
    name: string;
    hookForm: any;
    index: number;
    errors: any;
}

export const InputForm = (props: Props) => {
    return (
        <td className="game-match-field">
            <input
                type="number"
                name={props.name}
                {...props.hookForm}
                className="form-control criteria-item ms-2 me-2"
            />
            <ValidationMessage criteriaName={props.name} index={props.index} errors={props.errors} />
        </td>
    );
};
