import { GameModel } from "../dataModels/gameModel";
import { httpGet } from "./requestApi";

const resource = "games";

export async function getGames(): Promise<Array<GameModel>> {
    return httpGet({
        url: `${resource}/list`,
    });
}

export async function getTyrantsOfTheUnderdark(): Promise<Array<string>> {
    return httpGet({
        url: `${resource}/tyrants-of-the-underdark`,
    });
}
