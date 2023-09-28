namespace BoardGames.Domain.DataModels.GamesStore.Clank;

public class ClankMatchModel
{
    public Guid PlayerId { get; set; }
    
    public int Artefacts { get; set; }
    
    public int Prisoners { get; set; }
    
    public int Tokens { get; set; }
    
    public int Deck { get; set; }
    
    public int Coins { get; set; }
}