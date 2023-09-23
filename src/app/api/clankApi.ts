import { httpPost } from "./requestApi";
import { serialize } from "object-to-formdata";
import { ClankSaveModel } from "../dataModels/clankSaveModel";

const resource = "clank";

export async function saveClank(model: ClankSaveModel) {
    return httpPost({
        url: `${resource}/save`,
        body: serialize(model),
    });
}
