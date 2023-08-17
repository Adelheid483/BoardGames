import React from "react";
import local from "../../../../static/localization.json";

export const TyrantsOfTheUnderdarkCriteria = () => {
    return (
        <div className="game-match-block">
            <div className="criteria-list">
                <div className="criteria-name criteria-item">{local.CriteriaPlayer}</div>
                <div className="criteria-name criteria-item">{local.TyrantsOfTheUnderdark.ControlSites}</div>
                <div className="criteria-name criteria-item">{local.TyrantsOfTheUnderdark.TotalControlSites}</div>
                <div className="criteria-name criteria-item">{local.TyrantsOfTheUnderdark.TrophyHall}</div>
                <div className="criteria-name criteria-item">{local.TyrantsOfTheUnderdark.Deck}</div>
                <div className="criteria-name criteria-item">{local.TyrantsOfTheUnderdark.InnerCircleDeck}</div>
                <div className="criteria-name criteria-item">{local.TyrantsOfTheUnderdark.Tokens}</div>
                <div className="criteria-name criteria-item">{local.TotalCount}</div>
            </div>
        </div>
    );
};
