using BoardGames.Domain.DataModels;

namespace BoardGames.Application.Interfaces.Services.Players;

public interface IGetPlayersService
{
    Task<List<PlayerModel>> Get();
}