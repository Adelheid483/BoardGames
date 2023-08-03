import React, { useState } from "react";
import useAsyncEffect from "use-async-effect";
import { GameModel } from "../../dataModels/gameModel";
import { getGames } from "../../api/gamesApi";
import { GameItem } from "./gameItem";
import { GamePaths } from "../../dictionaries/games";
import { Title } from "../common/title";

export const Games = () => {
    const [games, setGames] = useState<GameModel[]>([]);

    useAsyncEffect(async () => {
        setGames(await getGames());
    }, []);

    const result = games.map((game, index) => (
        <GameItem key={index} path={GamePaths[game.gameType]} name={game.name} />
    ));

    return (
        <div>
            <Title title="Choose your game" />
            <ul className="list-group">{result}</ul>
        </div>
    );
};
