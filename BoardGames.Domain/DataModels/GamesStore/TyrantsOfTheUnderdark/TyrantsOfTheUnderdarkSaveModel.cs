namespace BoardGames.Domain.DataModels.GamesStore.TyrantsOfTheUnderdark;

public class TyrantsOfTheUnderdarkSaveModel : TyrantsOfTheUnderdarkMatchModel
{
    public Guid MatchId { get; set; }
    
    public int MatchNumber { get; set; }

    public DateTime DateMatch { get; set; }

    public int TotalCount { get; set; }
}