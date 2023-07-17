import React from "react";
import { Game } from "../dataModels/game";

interface Props {
    game: Game;
}

export const GameItem = (props: Props) => {
    return (
        <li key={props.game.id} className="list-group-item">
            {props.game.name}
        </li>
    );
};
