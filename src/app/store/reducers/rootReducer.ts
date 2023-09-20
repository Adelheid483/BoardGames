import { combineReducers } from "redux";
import { gamesReducer } from "./gamesReducer";
import { playersReducer } from "./playersReducer";

export const rootReducer = combineReducers({
    games: gamesReducer,
    players: playersReducer,
});
