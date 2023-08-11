using BoardGames.Domain.Entities;

namespace BoardGames.Application.Interfaces.Repositories;

public interface IPlayerRepository : IRepository<Player>
{
    Task<Player> Add(Player player);
}