import local from "../../../../static/localization.json";

export const TyrantsOfTheUnderdarkCriteria = () => {
    return (
        <div className="d-flex">
            <div className=" flex-column">
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
