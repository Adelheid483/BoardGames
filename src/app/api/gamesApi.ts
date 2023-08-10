import { GameModel } from "../dataModels/gameModel";
import { httpGet } from "./requestApi";
import { GameMatchInfoModel } from "../dataModels/gameMatchInfoModel";

const resource = "games";

export async function getGames(): Promise<Array<GameModel>> {
    return httpGet({
        url: `${resource}/list`,
    });
}

export async function getGameMatchInfo(): Promise<GameMatchInfoModel> {
    return httpGet({
        url: `${resource}/match-info`,
    });
}
