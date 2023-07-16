import { Game } from "../dataModels/game";
import { httpGet } from "./requestApi";

const resource = "games";

export async function getGames(): Promise<Array<Game>> {
    return httpGet({
        url: `${resource}`,
    });
}
