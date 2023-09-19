import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as GamesActionCreators from "../store/actions/gamesReducerActions";

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(GamesActionCreators, dispatch);
};
