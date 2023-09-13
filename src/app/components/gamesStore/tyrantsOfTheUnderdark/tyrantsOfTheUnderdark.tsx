import React from "react";
import { Title } from "../../common/title";
import { TyrantsOfTheUnderdarkCriteria } from "./tyrantsOfTheUnderdarkCriteria";
import { TyrantsOfTheUnderdarkForm } from "./tyrantsOfTheUnderdarkForm";
import local from "../../../../static/localization.json";

export const TyrantsOfTheUnderdark = () => {
    return (
        <section>
            <Title title={local.TyrantsOfTheUnderdarkTitle} showBackButton />
            <div className="game-match d-flex justify-content-center mt-5">
                <TyrantsOfTheUnderdarkCriteria />
                <TyrantsOfTheUnderdarkForm />
            </div>
        </section>
    );
};
