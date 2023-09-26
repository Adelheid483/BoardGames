using BoardGames.Domain.DataModels;

namespace BoardGames.Application.Interfaces.Services;

public interface IGetGamesService
{
    Task<List<GameModel>> Get();
}