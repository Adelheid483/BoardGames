using BoardGames.Domain.DataModels.GamesStore.Clank;

namespace BoardGames.Application.Interfaces.Services.GamesStore.Clank;

public interface IGetClankMatchInfoService
{
    Task<ClankMatchInfoModel> Get();
}