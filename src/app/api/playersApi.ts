import { httpPost } from "./requestApi";
import { serialize } from "object-to-formdata";
import { PlayerCreateModel } from "../dataModels/playerCreateModel";

const resource = "players";

export async function createNewPlayer(model: PlayerCreateModel) {
    return httpPost({
        url: `${resource}/create`,
        body: serialize(model),
    });
}
