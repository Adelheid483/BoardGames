import { GameModel } from "../dataModels/gameModel";

export enum GamesActionTypes {
    FETCH_GAMES = "FETCH_GAMES",
    FETCH_GAMES_SUCCESS = "FETCH_GAMES_SUCCESS",
    FETCH_GAMES_ERROR = "FETCH_GAMES_ERROR",
}

interface FetchGamesAction {
    type: GamesActionTypes.FETCH_GAMES;
}

interface FetchGamesSuccessAction {
    type: GamesActionTypes.FETCH_GAMES_SUCCESS;
    payload: GameModel[];
}

interface FetchGamesErrorAction {
    type: GamesActionTypes.FETCH_GAMES_ERROR;
    payload: string;
}

export type GamesFetchActionTypes = FetchGamesAction | FetchGamesSuccessAction | FetchGamesErrorAction;
