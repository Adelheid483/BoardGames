using BoardGames.Domain.DataModels;

namespace BoardGames.Application.Interfaces.Services;

public interface IGamesService
{
    Task<List<GameModel>> Get();
}