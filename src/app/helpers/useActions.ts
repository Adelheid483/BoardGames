import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as GamesActionCreators from "../store/actions/gamesReducerActions";
import * as PlayersFetchActionTypes from "../store/actions/playersReducerActions";

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(Object.assign({}, GamesActionCreators, PlayersFetchActionTypes), dispatch);
};
