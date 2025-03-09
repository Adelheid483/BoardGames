namespace BoardGames.Domain.DataModels.GamesStore.FiveTribes;

public class FiveTribesMatchModel
{
    public Guid PlayerId { get; set; }
    
    public int Coins { get; set; }
    
    public int YellowMipples { get; set; }
    
    public int WhiteMipples { get; set; }
    
    public int Gins { get; set; }
    
    public int CamelTiles { get; set; }
    
    public int PalmTiles { get; set; }
    
    public int CastleTiles { get; set; }
    
    public int Market { get; set; }
}