using BoardGames.Domain.Entities;

namespace BoardGames.Application.Interfaces.Repositories;

public interface IGameRepository : IRepository<Game>
{
    Task<Game> GetByName(string name);
}