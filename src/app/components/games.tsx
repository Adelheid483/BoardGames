import React, { useState } from "react";
import useAsyncEffect from "use-async-effect";
import { GameModel } from "../dataModels/gameModel";
import { getGames, getTyrantsOfTheUnderdark } from "../api/gamesApi";
import { GameItem } from "./gameItem";
import { TyrantsOfTheUnderdarkModel } from "../dataModels/Games/tyrantsOfTheUnderdarkModel";
import { TyrantsOfTheUnderdark } from "./games/tyrantsOfTheUnderdark";

export const Games = () => {
    const [games, setGames] = useState<GameModel[]>([]);
    const [tyrants, setTyrants] = useState<TyrantsOfTheUnderdarkModel>();

    useAsyncEffect(async () => {
        setGames(await getGames());
    }, []);

    const loadTyrants = async () => {
        await setTyrants(await getTyrantsOfTheUnderdark());
        console.log(tyrants);
    };

    const result = games.map((item) => <GameItem game={item} />);

    return (
        <div>
            <h3>Choose your game</h3>
            <ul className="list-group">{result}</ul>
            <hr />
            <button className="btn-primary lol" onClick={loadTyrants}>
                Tyrants Table
            </button>
            {tyrants != undefined ? <TyrantsOfTheUnderdark tyrants={tyrants} /> : null}
        </div>
    );
};
