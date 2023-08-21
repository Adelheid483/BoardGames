using BoardGames.Domain.DataModels;
using BoardGames.Domain.Entities;

namespace BoardGames.Application.Interfaces.Services;

public interface ITyrantsOfTheUnderdarkService
{
    Task<TyrantsOfTheUnderdarkMatch> Save(TyrantsOfTheUnderdarkSaveModel model);
}
