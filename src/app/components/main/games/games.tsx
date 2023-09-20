import React from "react";
import useAsyncEffect from "use-async-effect";
import { GameItem } from "./gameItem";
import { GamePaths } from "../../../dictionaries/games";
import { Title } from "../../common/title";
import local from "../../../../static/localization.json";
import { Loader } from "../../common/loader";
import { useTypedSelector } from "../../../helpers/useTypedSelector";
import { fetchGames } from "../../../store/actions/gamesReducerActions";
import { useActions } from "../../../helpers/useActions";
import { Error } from "../../common/error";

export const Games = () => {
    const { games, error, loading } = useTypedSelector((state) => state.games);
    const { fetchGames } = useActions();

    useAsyncEffect(async () => {
        fetchGames();
    }, []);

    const allGames = games.map((game, index) => (
        <GameItem key={index} path={GamePaths[game.gameType]} name={game.name} />
    ));

    console.log(allGames);

    return (
        <section className="games-section">
            <Title title={local.ChooseYourGame} />
            {loading ? <Loader loading={loading} /> : <ul className="list-group">{allGames}</ul>}
            {error ?? <Error errorMessage={error} />}
        </section>
    );
};
