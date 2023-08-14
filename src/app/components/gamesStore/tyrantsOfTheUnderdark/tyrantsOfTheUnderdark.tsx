import React from "react";
import { Title } from "../../common/title";
import { TyrantsOfTheUnderdarkCriteria } from "./tyrantsOfTheUnderdarkCriteria";
import { TyrantsOfTheUnderdarkForm } from "./tyrantsOfTheUnderdarkForm";

export const TyrantsOfTheUnderdark = () => {
    return (
        <section>
            <Title title="Tyrants of the Underdark" showBackButton />
            <div className="game-match mt-5">
                <TyrantsOfTheUnderdarkCriteria />
                <TyrantsOfTheUnderdarkForm />
            </div>
        </section>
    );
};
