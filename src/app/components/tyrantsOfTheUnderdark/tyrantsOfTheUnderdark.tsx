import React from "react";
import { Title } from "../common/title";
import { TyrantsOfTheUnderdarkCriteria } from "./tyrantsOfTheUnderdarkCriteria";
import { TyrantsOfTheUnderdarkForm } from "./tyrantsOfTheUnderdarkForm";

export const TyrantsOfTheUnderdark = () => {
    return (
        <>
            <Title title="Tyrants of the Underdark" />
            <div className="game-item">
                <TyrantsOfTheUnderdarkCriteria />
                <TyrantsOfTheUnderdarkForm />
            </div>
        </>
    );
};
