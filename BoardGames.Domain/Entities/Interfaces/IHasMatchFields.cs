namespace BoardGames.Domain.Entities.Interfaces;

public interface IHasMatchFields
{
    Guid MatchId { get; set; }
    
    Guid PlayerId { get; set; }
    
    DateTime DateMatch { get; set; }
}