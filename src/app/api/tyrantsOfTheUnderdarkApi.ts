import { httpPost } from "./requestApi";
import { TyrantsOfTheUnderdarkCountModel } from "../dataModels/tyrantsOfTheUnderdarkCountModel";
import { serialize } from "object-to-formdata";

const resource = "tyrants-of-the-underdark";

export async function countTyrantsOfTheUnderdarkSet(model: TyrantsOfTheUnderdarkCountModel): Promise<number> {
    return httpPost({
        url: `${resource}/count`,
        body: serialize(model),
    });
}
