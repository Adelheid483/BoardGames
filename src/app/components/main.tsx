import React from "react";
import { Games } from "./gameList/games";
import { TyrantsOfTheUnderdarkList } from "./tyrantsOfTheUnderdark/tyrantsOfTheUnderdarkList";
import { TyrantsOfTheUnderdarkAdd } from "./tyrantsOfTheUnderdark/tyrantsOfTheUnderdarkAdd";

export const Main = () => {
    return (
        <div>
            <Games />
            <hr />
            <TyrantsOfTheUnderdarkList />
            <TyrantsOfTheUnderdarkAdd />
        </div>
    );
};
