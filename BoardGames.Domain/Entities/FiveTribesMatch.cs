using BoardGames.Domain.Entities.Interfaces;
namespace BoardGames.Domain.Entities;

public class FiveTribesMatch : Entity, IHasMatchFields
{
    public Guid MatchId { get; set; }
    
    public int MatchNumber { get; set; }

    public Guid PlayerId { get; set; }
    
    public DateTime DateMatch { get; set; }
    
    public int Coins { get; set; }
    
    public int YellowMipples { get; set; }
    
    public int WhiteMipples { get; set; }
    
    public int Gins { get; set; }
    
    public int CamelTiles { get; set; }
    
    public int PalmTiles { get; set; }
    
    public int CastleTiles { get; set; }
    
    public int Market { get; set; }
}
