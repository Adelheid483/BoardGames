import { TyrantsOfTheUnderdarkMatchModel } from "../dataModels/gamesStore/tyrantsOfTheUnderdark/tyrantsOfTheUnderdarkMatchModel";
import { ClankMatchModel } from "../dataModels/gamesStore/clank/clankMatchModel";
import { FiveTribesMatchModel } from "../dataModels/gamesStore/fiveTribes/fiveTribesMatchModel";

// custom types
export type HttpRequestMethod = "GET" | "POST" | "PUT" | "DELETE";
export type AlertVariant = "success" | "danger" | "warning";
export type matchModels = TyrantsOfTheUnderdarkMatchModel | ClankMatchModel | FiveTribesMatchModel;
export type matchModelsArray = TyrantsOfTheUnderdarkMatchModel[] | ClankMatchModel[] | FiveTribesMatchModel[];

export type EnumDictionary<T extends string | symbol | number, U> = {
    [K in T]?: U;
};
