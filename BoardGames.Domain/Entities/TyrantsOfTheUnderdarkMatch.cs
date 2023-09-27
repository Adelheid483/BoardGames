using BoardGames.Domain.Entities.Interfaces;
namespace BoardGames.Domain.Entities;

public class TyrantsOfTheUnderdarkMatch : Entity, IHasMatchFields
{
    public Guid MatchId { get; set; }
    
    public Guid PlayerId { get; set; }
    
    public DateTime DateMatch { get; set; }
    
    public int ControlSites { get; set; }
    
    public int TotalControlSites { get; set; }
    
    public int TrophyHall { get; set; }
    
    public int Deck { get; set; }
    
    public int InnerCircleDeck { get; set; }
    
    public int Tokens { get; set; }
    
    public int TotalCount { get; set; }
}
