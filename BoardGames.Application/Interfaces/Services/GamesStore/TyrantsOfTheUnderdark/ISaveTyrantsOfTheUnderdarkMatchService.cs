using BoardGames.Domain.DataModels;
using BoardGames.Domain.Entities;

namespace BoardGames.Application.Interfaces.Services.GamesStore.TyrantsOfTheUnderdark;

public interface ISaveTyrantsOfTheUnderdarkMatchService
{
    Task<TyrantsOfTheUnderdarkMatch> Save(TyrantsOfTheUnderdarkSaveModel model);
}
