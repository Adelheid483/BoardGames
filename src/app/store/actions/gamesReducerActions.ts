import { Dispatch } from "redux";
import { getGames } from "../../api/gamesApi";
import { GamesFetchActionTypes, GamesActionTypes } from "../../types/gamesFetchActionTypes";
import local from "../../../static/localization.json";

export const fetchGames = () => {
    return async (dispatch: Dispatch<GamesFetchActionTypes>) => {
        try {
            dispatch({ type: GamesActionTypes.FETCH_GAMES });
            const response = await getGames();
            dispatch({ type: GamesActionTypes.FETCH_GAMES_SUCCESS, payload: response });
        } catch (e) {
            dispatch({ type: GamesActionTypes.FETCH_GAMES_ERROR, payload: local.ErrorLoading });
        }
    };
};
