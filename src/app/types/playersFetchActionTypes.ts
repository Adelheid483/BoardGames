import { PlayerModel } from "../dataModels/playerModel";

export enum PlayersActionTypes {
    FETCH_PLAYERS = "FETCH_PLAYERS",
    FETCH_PLAYERS_SUCCESS = "FETCH_PLAYERS_SUCCESS",
    FETCH_PLAYERS_ERROR = "FETCH_PLAYERS_ERROR",
}

interface FetchPlayersAction {
    type: PlayersActionTypes.FETCH_PLAYERS;
}

interface FetchPlayersSuccessAction {
    type: PlayersActionTypes.FETCH_PLAYERS_SUCCESS;
    payload: PlayerModel[];
}

interface FetchPlayersErrorAction {
    type: PlayersActionTypes.FETCH_PLAYERS_ERROR;
    payload: string;
}

export type PlayersFetchActionTypes = FetchPlayersAction | FetchPlayersSuccessAction | FetchPlayersErrorAction;
