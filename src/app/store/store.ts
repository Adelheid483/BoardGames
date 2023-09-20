import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { gamesReducer } from "./reducers/gamesReducer";
import { playersReducer } from "./reducers/playersReducer";

const rootReducer = combineReducers({
    games: gamesReducer,
    players: playersReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
