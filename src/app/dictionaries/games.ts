import { GameType } from "../enums/gameType";
import { EnumDictionary } from "../types/types";

export const GamePaths: EnumDictionary<GameType, string> = {
    [GameType.Clank]: "clank",
    [GameType.TyrantsOfTheUnderdark]: "tyrants-of-the-underdark",
    [GameType.FiveTribes]: "five-tribes",
};
