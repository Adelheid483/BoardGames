import React, { useState } from "react";
import useAsyncEffect from "use-async-effect";
import { GameModel } from "../../dataModels/gameModel";
import { getGames } from "../../api/gamesApi";
import { GameItem } from "./gameItem";

export const Games = () => {
    const [games, setGames] = useState<GameModel[]>([]);

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
