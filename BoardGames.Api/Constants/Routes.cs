namespace BoardGames.Constants;

public static class Routes
{
    public const string Api = "api";
    
    public static class Players
    {
        public const string Create = "players/create";
        
        public const string List = "players/list";
    }
    
    public static class Games
    {
        public const string List = "games/list";
    }
    
    public static class TyrantsOfTheUnderdark
    {
        public const string Save = "tyrants-of-the-underdark/save";
        
        public const string MatchInfo = "tyrants-of-the-underdark/match-info";
    }
    
    public static class Clank
    {
        public const string Save = "clank/save";
        
        public const string MatchInfo = "clank/match-info";
    }
    
    public static class FiveTribes
    {
        public const string Save = "five-tribes/save";
        
        public const string MatchInfo = "five-tribes/match-info";
    }
}