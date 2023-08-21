import { httpPost } from "./requestApi";
import { serialize } from "object-to-formdata";
import { TyrantsOfTheUnderdarkSaveModel } from "../dataModels/tyrantsOfTheUnderdarkSaveModel";

const resource = "tyrants-of-the-underdark";

export async function saveTyrantsOfTheUnderdark(model: TyrantsOfTheUnderdarkSaveModel) {
    return httpPost({
        url: `${resource}/save`,
        body: serialize(model),
    });
}
