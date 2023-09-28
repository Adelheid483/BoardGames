import { TyrantsOfTheUnderdarkMatchModel } from "./tyrantsOfTheUnderdarkMatchModel";

export interface TyrantsOfTheUnderdarkSaveModel extends TyrantsOfTheUnderdarkMatchModel {
    matchId: string;
    matchNumber: number;
    dateMatch: Date;
    totalCount: number;
}
