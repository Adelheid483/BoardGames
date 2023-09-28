import { ClankMatchModel } from "./clankMatchModel";

export interface ClankSaveModel extends ClankMatchModel {
    matchId: string;
    matchNumber: number;
    dateMatch: Date;
    totalCount: number;
}
