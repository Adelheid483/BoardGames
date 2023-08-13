using BoardGames.Domain.DataModels;
using BoardGames.Domain.Entities;

namespace BoardGames.Application.Interfaces.Services;

public interface IPlayersService
{
    Task<Player> Create(PlayerCreateModel model);

    Task<List<PlayerModel>> Get();
}