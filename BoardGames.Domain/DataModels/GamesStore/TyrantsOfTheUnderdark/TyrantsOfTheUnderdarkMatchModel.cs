namespace BoardGames.Domain.DataModels.GamesStore.TyrantsOfTheUnderdark;

public class TyrantsOfTheUnderdarkMatchModel
{
    public Guid PlayerId { get; set; }
    
    public int ControlSites { get; set; }
    
    public int TotalControlSites { get; set; }
    
    public int TrophyHall { get; set; }
    
    public int Deck { get; set; }
    
    public int InnerCircleDeck { get; set; }
    
    public int Tokens { get; set; }
}