namespace BoardGames.Domain.DataModels.GamesStore.FiveTribes;

public class FiveTribesSaveModel : FiveTribesMatchModel
{
    public Guid MatchId { get; set; }
    
    public int MatchNumber { get; set; }

    public DateTime DateMatch { get; set; }

    public int TotalCount { get; set; }
}