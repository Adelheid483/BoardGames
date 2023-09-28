namespace BoardGames.Domain.Entities.Interfaces;

public interface IHasMatchFields
{
    Guid MatchId { get; set; }
    
    int MatchNumber { get; set; }
    
    Guid PlayerId { get; set; }
    
    DateTime DateMatch { get; set; }
}