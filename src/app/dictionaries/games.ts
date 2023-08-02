import { EnumDictionary } from "./enumDictionary";
import { GameType } from "../enums/gameType";

export const GamePaths: EnumDictionary<GameType, string> = {
    [GameType.Clank]: "clank",
    [GameType.TyrantsOfTheUnderdark]: "tyrants-of-the-underdark",
    [GameType.ResArcana]: "res-arcana",
    [GameType.FiveTribes]: "five-tribes",
};
