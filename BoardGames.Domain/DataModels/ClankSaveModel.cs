namespace BoardGames.Domain.DataModels;

public class ClankSaveModel : ClankMatchModel
{
    public Guid MatchId { get; set; }

    public DateTime DateMatch { get; set; }

    public int TotalCount { get; set; }
}