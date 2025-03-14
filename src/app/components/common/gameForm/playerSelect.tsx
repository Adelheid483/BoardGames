import useAsyncEffect from "use-async-effect";
import local from "../../../../static/localization.json";
import { MenuItem, TextField } from "@mui/material";
import { Error } from "../error";
import { PlayerModel } from "../../../dataModels/playerModel";
import { useActions, useTypedSelector } from "../../../helpers/reduxHooks";
import { ValidationMessage } from "./validationMessage";

interface Props {
    player: PlayerModel;
    hookForm: any;
    index: number;
    errors: any;
}

export const PlayerSelect = (props: Props) => {
    const players = useTypedSelector((state) => state.players);
    const { fetchPlayers } = useActions();

    useAsyncEffect(async () => {
        fetchPlayers();
    }, []);

    return (
        <td className="game-match-field">
            <TextField
                select
                label={local.SelectPlayer}
                defaultValue=""
                value={props.player}
                {...props.hookForm}
                className="form-control criteria-item ms-2 me-2"
            >
                {players.error ? (
                    <Error errorMessage={players.error} />
                ) : (
                    players.players.map((item) => (
                        <MenuItem value={item.id} key={item.id}>
                            {item.name}
                        </MenuItem>
                    ))
                )}
            </TextField>
            <ValidationMessage criteriaName={"playerId"} index={props.index} errors={props.errors} />
        </td>
    );
};
