import { bindActionCreators } from "redux";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import * as GamesActionCreators from "../store/actions/gamesReducerActions";
import * as PlayersFetchActionTypes from "../store/actions/playersReducerActions";

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(Object.assign({}, GamesActionCreators, PlayersFetchActionTypes), dispatch);
};

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
