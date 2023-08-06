import { httpPost } from "./requestApi";
import { TotalCountModel } from "../dataModels/totalCountModel";
import { serialize } from "object-to-formdata";
import { TyrantsOfTheUnderdarkSaveModel } from "../dataModels/tyrantsOfTheUnderdarkSaveModel";

const resource = "tyrants-of-the-underdark";

export async function countTyrantsOfTheUnderdark(model: TotalCountModel): Promise<number> {
    return httpPost({
        url: `${resource}/count`,
        body: serialize(model),
    });
}

export async function saveTyrantsOfTheUnderdark(model: TyrantsOfTheUnderdarkSaveModel): Promise<number> {
    return httpPost({
        url: `${resource}/save`,
        body: serialize(model),
    });
}
