import { httpGet, httpPost } from "./requestApi";
import { serialize } from "object-to-formdata";
import { ClankSaveModel } from "../dataModels/gamesStore/clank/clankSaveModel";
import { ClankMatchInfoModel } from "../dataModels/gamesStore/clank/clankMatchInfoModel";

const resource = "clank";

export async function saveClank(model: ClankSaveModel) {
    return httpPost({
        url: `${resource}/save`,
        body: serialize(model),
    });
}

export async function getClankMatchInfo(): Promise<ClankMatchInfoModel> {
    return httpGet({
        url: `${resource}/match-info`,
    });
}
