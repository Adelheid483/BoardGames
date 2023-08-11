using BoardGames.Domain.Entities;

namespace BoardGames.Application.Interfaces.Repositories;

public interface IPlayerRepository
{
    Task<Player> Add(Player player);
}