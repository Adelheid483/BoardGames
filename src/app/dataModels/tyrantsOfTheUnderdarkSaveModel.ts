import { TyrantsOfTheUnderdarkMatchModel } from "./tyrantsOfTheUnderdarkMatchModel";

export interface TyrantsOfTheUnderdarkSaveModel extends TyrantsOfTheUnderdarkMatchModel {
    matchId: string;
    dateMatch: Date;
    totalCount: number;
}
