import React, { useState } from "react";
import { Game } from "../dataModels/game";
import useAsyncEffect from "use-async-effect";
import { getGames } from "../api/gamesApi";
import { GameItem } from "./gameItem";

export const Games = () => {
    const [games, setGames] = useState<Game[]>([]);

    useAsyncEffect(async () => {
        setGames(await getGames());
    }, []);

    const result = games.map((item) => <GameItem game={item} />);

    return (
        <div>
            <h3>Choose your game</h3>
            <ul className="list-group">{result}</ul>
        </div>
    );
};
