import React from "react";
import { Game } from "../dataModels/game";

interface Props {
    game: Game
}

export const GameItem = (props: Props) => {
    return (
        <li key={props.game.id}>
            {props.game.name}
        </li>
    );
};
