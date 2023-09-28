namespace BoardGames.Domain.DataModels.GamesStore.Clank;

public class ClankSaveModel : ClankMatchModel
{
    public Guid MatchId { get; set; }
    
    public int MatchNumber { get; set; }

    public DateTime DateMatch { get; set; }

    public int TotalCount { get; set; }
}