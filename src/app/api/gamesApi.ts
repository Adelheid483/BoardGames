import { GameModel } from "../dataModels/gameModel";
import { httpGet } from "./requestApi";
import { TyrantsOfTheUnderdarkModel } from "../dataModels/Games/tyrantsOfTheUnderdarkModel";

const resource = "games";

export async function getGames(): Promise<Array<GameModel>> {
    return httpGet({
        url: `${resource}/list`,
    });
}

export async function getTyrantsOfTheUnderdark(): Promise<TyrantsOfTheUnderdarkModel> {
    return httpGet({
        url: `${resource}/tyrants-of-the-underdark`,
    });
}
