import { httpGet, httpPost } from "./requestApi";
import { serialize } from "object-to-formdata";
import { TyrantsOfTheUnderdarkSaveModel } from "../dataModels/gamesStore/tyrantsOfTheUnderdark/tyrantsOfTheUnderdarkSaveModel";
import { TyrantsOfTheUnderdarkMatchInfoModel } from "../dataModels/gamesStore/tyrantsOfTheUnderdark/tyrantsOfTheUnderdarkMatchInfoModel";

const resource = "tyrants-of-the-underdark";

export async function saveTyrantsOfTheUnderdark(model: TyrantsOfTheUnderdarkSaveModel) {
    return httpPost({
        url: `${resource}/save`,
        body: serialize(model),
    });
}

export async function getTyrantsOfTheUnderdarkMatchInfo(): Promise<TyrantsOfTheUnderdarkMatchInfoModel> {
    return httpGet({
        url: `${resource}/match-info`,
    });
}
