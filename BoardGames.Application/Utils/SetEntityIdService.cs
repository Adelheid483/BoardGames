using BoardGames.Application.Interfaces.Utils;
using BoardGames.Domain.Entities;

namespace BoardGames.Application.Utils;

public class SetEntityIdService : ISetEntityIdService
{
    public void Set<T>(T entity) where T : Entity
    {
        if (entity.Id != default)
        {
            return;
        }

        entity.Id = Guid.NewGuid();
    }
}