namespace BoardGames.Domain.Entities;

public class TyrantsOfTheUnderdarkMatch
{
    public Guid Id { get; set; }
    
    public Guid GameId { get; set; }
    
    public Guid PlayerId { get; set; }
    
    public DateTime DateMatch { get; set; }
    
    public int? ControlSites { get; set; }
    
    public int? TotalControlSites { get; set; }
    
    public int? TrophyHall { get; set; }
    
    public int? Deck { get; set; }
    
    public int? InnerCircleDeck { get; set; }
    
    public int? Tokens { get; set; }
}
