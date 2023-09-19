import { GamesFetchActionTypes, GamesActionTypes } from "../../types/gamesFetchActionTypes";
import { GameModel } from "../../dataModels/gameModel";

interface GamesReducerState {
    games: GameModel[];
    loading: boolean;
    error: null | string;
}

const initialState: GamesReducerState = {
    games: [],
    loading: false,
    error: null,
};

export const gamesReducer = (state = initialState, action: GamesFetchActionTypes): GamesReducerState => {
    switch (action.type) {
        case GamesActionTypes.FETCH_GAMES:
            return { games: [], loading: true, error: null };
        case GamesActionTypes.FETCH_GAMES_SUCCESS:
            return { games: action.payload, loading: false, error: null };
        case GamesActionTypes.FETCH_GAMES_ERROR:
            return { games: [], loading: false, error: action.payload };
        default:
            return state;
    }
};
