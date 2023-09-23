import { ClankMatchModel } from "./clankMatchModel";

export interface ClankSaveModel extends ClankMatchModel {
    matchId: string;
    dateMatch: Date;
    totalCount: number;
}
