using BoardGames.Domain.DataModels;

namespace BoardGames.Application.Interfaces;

public interface IGetGamesList
{
    Task<List<GameModel>> Get();
}