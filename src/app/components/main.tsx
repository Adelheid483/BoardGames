import React from "react";
import { Games } from "./gameList/games";
import { Players } from "./players/players";

export const Main = () => {
    return (
        <div className="main-paige">
            <Players />
            <Games />
        </div>
    );
};
