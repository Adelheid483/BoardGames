import React from "react";
import { Constants } from "../../../../static/constants";
import { Loader } from "../loader";

interface Props {
    totalCount: number[];
    index: number;
    loading: boolean;
}

export const TotalCount = (props: Props) => {
    return (
        <td className="game-match-total-count ps-3 criteria-name">
            {props.totalCount.length === 0 && !props.loading ? (
                Constants.emptyString
            ) : props.loading ? (
                <Loader loading={props.loading} />
            ) : (
                props.totalCount[props.index]
            )}
        </td>
    );
};
