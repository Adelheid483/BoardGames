using BoardGames.Domain.Entities;

namespace BoardGames.Application.Interfaces.Utils;

public interface ISetEntityIdService
{
    void Set<T>(T entity) where T : Entity;
}