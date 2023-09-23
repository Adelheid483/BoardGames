namespace BoardGames.Domain.DataModels;

public class ClankMatchModel
{
    public Guid PlayerId { get; set; }
    
    public int Artefacts { get; set; }
    
    public int Prisoners { get; set; }
    
    public int Tokens { get; set; }
    
    public int Deck { get; set; }
    
    public int Coins { get; set; }
}