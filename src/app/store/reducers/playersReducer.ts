import { PlayerModel } from "../../dataModels/playerModel";
import { PlayersActionTypes, PlayersFetchActionTypes } from "../../types/playersFetchActionTypes";

interface PlayersReducerState {
    players: PlayerModel[];
    loading: boolean;
    error: null | string;
}

const initialState: PlayersReducerState = {
    players: [],
    loading: false,
    error: null,
};

export const playersReducer = (state = initialState, action: PlayersFetchActionTypes): PlayersReducerState => {
    switch (action.type) {
        case PlayersActionTypes.FETCH_PLAYERS:
            return { players: [], loading: true, error: null };
        case PlayersActionTypes.FETCH_PLAYERS_SUCCESS:
            return { players: action.payload, loading: false, error: null };
        case PlayersActionTypes.FETCH_PLAYERS_ERROR:
            return { players: [], loading: false, error: action.payload };
        default:
            return state;
    }
};
