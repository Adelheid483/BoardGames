using BoardGames.Domain.DataModels;

namespace BoardGames.Application.Interfaces.Services;

public interface IGetGameMatchesService
{
    Task<GameMatchInfoModel> Get();
}