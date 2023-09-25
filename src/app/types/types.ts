import { TyrantsOfTheUnderdarkMatchModel } from "../dataModels/tyrantsOfTheUnderdarkMatchModel";
import { ClankMatchModel } from "../dataModels/clankMatchModel";

// custom types
export type HttpRequestMethod = "GET" | "POST" | "PUT" | "DELETE";
export type ToastVariant = "success" | "danger" | "warning";
export type matchModels = TyrantsOfTheUnderdarkMatchModel | ClankMatchModel;
export type matchModelsArray = TyrantsOfTheUnderdarkMatchModel[] | ClankMatchModel[];

export type EnumDictionary<T extends string | symbol | number, U> = {
    [K in T]?: U;
};
