using BoardGames.Domain.DataModels;

namespace BoardGames.Application.Interfaces;

public interface IGetGameMatchInfo
{
    Task<GameMatchInfoModel> Get();
}