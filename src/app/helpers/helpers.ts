import { Constants } from "../../static/constants";
import { matchModels } from "../types/types";
import local from "../../static/localization.json";

export const getTotalCount = (match: matchModels) => {
    // @ts-ignore
    const values = Object.keys(match).map((key) => match[key]);
    const numberValues = values.filter((item) => typeof item !== "string");

    return numberValues.reduce((total, item) => total + item);
};

export const enableAddBtn = (playersAmount: number) =>
    playersAmount === Constants.minNumPlayers || playersAmount < Constants.maxNumPlayers;

export const enableRemoveBtn = (playersAmount: number) =>
    playersAmount === Constants.maxNumPlayers || playersAmount > Constants.minNumPlayers;

export const inputValidation = {
    valueAsNumber: true,
    required: {
        value: true,
        message: local.RequiredValue,
    },
};
