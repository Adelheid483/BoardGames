namespace BoardGames.Domain.DataModels.GamesStore.Clank;

public class ClankMatchInfoModel
{
    public Guid MatchId { get; set; }
    
    public int MatchNumber { get; set; }
    
    public DateTime DateMatch { get; set; }
}