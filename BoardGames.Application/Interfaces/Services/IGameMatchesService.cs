using BoardGames.Domain.DataModels;

namespace BoardGames.Application.Interfaces.Services;

public interface IGameMatchesService
{
    Task<GameMatchInfoModel> Get();
}