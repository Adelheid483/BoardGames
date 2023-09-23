namespace BoardGames.Domain.Entities;

public class ClankMatch : Entity, IHasMatchFields
{
    public Guid GameId { get; set; }
    
    public Guid PlayerId { get; set; }
    
    public DateTime DateMatch { get; set; }
    
    public int Deck { get; set; }
    
    public int Coins { get; set; }
    
    public int Prisoners { get; set; }
    
    public int Artefacts { get; set; }
    
    public int Tokens { get; set; }
}
