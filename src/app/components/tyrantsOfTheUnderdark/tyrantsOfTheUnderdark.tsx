import React from "react";
import { Title } from "../common/title";
import { TyrantsOfTheUnderdarkForm } from "./tyrantsOfTheUnderdarkForm";
import { BackButton } from "../common/backButton";
import { TyrantsOfTheUnderdarkCriteria } from "./tyrantsOfTheUnderdarkCriteria";
import { SaveButton } from "../common/saveButton";

export const TyrantsOfTheUnderdark = () => {
    return (
        <>
            <Title title="Tyrants of the Underdark" />
            <div className="tyrants-of-the-underdark">
                <TyrantsOfTheUnderdarkCriteria />
                <TyrantsOfTheUnderdarkForm />
                <TyrantsOfTheUnderdarkForm />
                <TyrantsOfTheUnderdarkForm />
                <TyrantsOfTheUnderdarkForm />
            </div>
            <BackButton />
            <SaveButton />
        </>
    );
};
