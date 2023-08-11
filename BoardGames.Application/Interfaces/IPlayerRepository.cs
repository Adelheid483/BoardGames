using BoardGames.Domain.Entities;

namespace BoardGames.Application.Interfaces;

public interface IPlayerRepository
{
    Task<Player> Add(Player player);
}