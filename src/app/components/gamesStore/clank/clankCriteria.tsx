import React from "react";
import local from "../../../../static/localization.json";

export const ClankCriteria = () => {
    return (
        <div className="d-flex">
            <div className=" flex-column">
                <div className="criteria-name criteria-item">{local.CriteriaPlayer}</div>
                <div className="criteria-name criteria-item">{local.Clank.Artefacts}</div>
                <div className="criteria-name criteria-item">{local.Clank.Prisoners}</div>
                <div className="criteria-name criteria-item">{local.Clank.Tokens}</div>
                <div className="criteria-name criteria-item">{local.Clank.Deck}</div>
                <div className="criteria-name criteria-item">{local.Clank.Coins}</div>
                <div className="criteria-name criteria-item">{local.TotalCount}</div>
            </div>
        </div>
    );
};
