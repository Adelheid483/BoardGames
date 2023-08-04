import { httpPost } from "./requestApi";
import { TotalCountModel } from "../dataModels/totalCountModel";
import { serialize } from "object-to-formdata";

const resource = "tyrants-of-the-underdark";

export async function countTyrantsOfTheUnderdark(model: TotalCountModel): Promise<number> {
    return httpPost({
        url: `${resource}/count`,
        body: serialize(model),
    });
}
