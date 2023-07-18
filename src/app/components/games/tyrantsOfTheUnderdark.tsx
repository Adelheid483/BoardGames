import React from "react";
import { TyrantsOfTheUnderdarkModel } from "../../dataModels/Games/tyrantsOfTheUnderdarkModel";

interface Props {
    tyrants: TyrantsOfTheUnderdarkModel;
}

export const TyrantsOfTheUnderdark = (props: Props) => {
    return (
        <table>
            <tr>
                <td>&nbsp;</td>
                <td>Alina</td>
                <td>Maksim</td>
            </tr>
            <tr>
                <td>Control site</td>
                <td>{props.tyrants.controlSites}</td>
                <td>{props.tyrants.controlSites}</td>
            </tr>
            <tr>
                <td>Total Control Sites</td>
                <td>{props.tyrants.totalControlSites}</td>
                <td>{props.tyrants.totalControlSites}</td>
            </tr>
            <tr>
                <td>Trophy Hall</td>
                <td>{props.tyrants.trophyHall}</td>
                <td>{props.tyrants.trophyHall}</td>
            </tr>
            <tr>
                <td>Deck</td>
                <td>{props.tyrants.deck}</td>
                <td>{props.tyrants.deck}</td>
            </tr>
            <tr>
                <td>Inner Circle Deck</td>
                <td>{props.tyrants.innerCircleDeck}</td>
                <td>{props.tyrants.innerCircleDeck}</td>
            </tr>
            <tr>
                <td>Tokens</td>
                <td>{props.tyrants.tokens}</td>
                <td>{props.tyrants.tokens}</td>
            </tr>
        </table>
    );
};
