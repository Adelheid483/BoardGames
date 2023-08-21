namespace BoardGames.Domain.DataModels;

public class TyrantsOfTheUnderdarkSaveModel : TyrantsOfTheUnderdarkMatchModel
{
    public Guid MatchId { get; set; }

    public DateTime DateMatch { get; set; }

    public int TotalCount { get; set; }
}