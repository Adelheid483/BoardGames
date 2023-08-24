import { httpGet, httpPost } from "./requestApi";
import { serialize } from "object-to-formdata";
import { PlayerCreateModel } from "../dataModels/playerCreateModel";
import { PlayerModel } from "../dataModels/playerModel";
import { Result } from "../dataModels/result";

const resource = "players";

export async function createNewPlayer(model: PlayerCreateModel): Promise<Result> {
    return httpPost({
        url: `${resource}/create`,
        body: serialize(model),
    });
}

export async function getPlayers(): Promise<Array<PlayerModel>> {
    return httpGet({
        url: `${resource}/list`,
    });
}
