using BoardGames.Domain.DataModels;
using BoardGames.Domain.Entities;

namespace BoardGames.Application.Interfaces;

public interface IPlayersService
{
    Task<Player> Create(PlayerCreateModel model);
}