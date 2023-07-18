import React from "react";
import { GameModel } from "../../dataModels/gameModel";

interface Props {
    game: GameModel;
}

export const GameItem = (props: Props) => {
    return (
        <li key={props.game.id} className="list-group-item">
            {props.game.name}
        </li>
    );
};
