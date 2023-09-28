using BoardGames.Domain.DataModels.GamesStore.TyrantsOfTheUnderdark;

namespace BoardGames.Application.Interfaces.Services.GamesStore.TyrantsOfTheUnderdark;

public interface IGetTyrantsOfTheUnderdarkMatchInfoService
{
    Task<TyrantsOfTheUnderdarkMatchInfoModel> Get();
}