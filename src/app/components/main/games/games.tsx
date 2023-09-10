import React, { useState } from "react";
import useAsyncEffect from "use-async-effect";
import { GameModel } from "../../../dataModels/gameModel";
import { getGames } from "../../../api/gamesApi";
import { GameItem } from "./gameItem";
import { GamePaths } from "../../../dictionaries/games";
import { Title } from "../../common/title";
import local from "../../../../static/localization.json";
import { Loader } from "../../common/loader";

export const Games = () => {
    const [games, setGames] = useState<GameModel[]>([]);
    const [loading, setLoading] = useState(false);

    useAsyncEffect(async () => {
        setLoading(true);
        setGames(await getGames());
        setLoading(false);
    }, []);

    const allGames = games.map((game, index) => (
        <GameItem key={index} path={GamePaths[game.gameType]} name={game.name} />
    ));

    return (
        <section className="games-section">
            <Title title={local.ChooseYourGame} />
            {loading ? <Loader loading={loading} /> : <ul className="list-group">{allGames}</ul>}
        </section>
    );
};
