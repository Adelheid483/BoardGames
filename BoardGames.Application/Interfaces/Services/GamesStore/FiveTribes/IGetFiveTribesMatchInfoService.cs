
using BoardGames.Domain.DataModels.GamesStore.FiveTribes;

namespace BoardGames.Application.Interfaces.Services.GamesStore.FiveTribes;

public interface IGetFiveTribesMatchInfoService
{
    Task<FiveTribesMatchInfoModel> Get();
}