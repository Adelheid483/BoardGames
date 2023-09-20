import { Dispatch } from "redux";
import local from "../../../static/localization.json";
import { PlayersActionTypes, PlayersFetchActionTypes } from "../../types/playersFetchActionTypes";
import { getPlayers } from "../../api/playersApi";

export const fetchPlayers = () => {
    return async (dispatch: Dispatch<PlayersFetchActionTypes>) => {
        try {
            dispatch({ type: PlayersActionTypes.FETCH_PLAYERS });
            const response = await getPlayers();
            dispatch({ type: PlayersActionTypes.FETCH_PLAYERS_SUCCESS, payload: response });
        } catch (e) {
            dispatch({ type: PlayersActionTypes.FETCH_PLAYERS_ERROR, payload: local.ErrorLoading });
        }
    };
};
