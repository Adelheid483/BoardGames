namespace BoardGames.Domain.Entities;

public interface IHasMatchFields
{
    public Guid GameId { get; set; }
    
    public Guid PlayerId { get; set; }
    
    public DateTime DateMatch { get; set; }
}