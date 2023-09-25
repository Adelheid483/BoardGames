import React from "react";
import { DeepRequired, FieldErrorsImpl, GlobalError } from "react-hook-form";
import { matchModelsArray } from "../../../types/types";

interface Props {
    criteriaName: string;
    index: number;
    errors: Partial<FieldErrorsImpl<DeepRequired<FormModel>>> & { root?: Record<string, GlobalError> & GlobalError };
}

interface FormModel {
    matches: matchModelsArray;
}

export const ValidationMessage = (props: Props) => {
    return (
        <div className="error-validation">
            {props.errors.matches?.map(
                // @ts-ignore
                (player, idx) => idx === props.index && player[props.criteriaName]?.message
            )}
        </div>
    );
};
