using BoardGames.Domain.DataModels;

namespace BoardGames.Application.Interfaces;

public interface IGetGamesList
{
    List<GameModel> Get();
}