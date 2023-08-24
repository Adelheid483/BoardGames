using BoardGames.Domain.Entities;

namespace BoardGames.Application.Interfaces.Repositories;

public interface ITyrantsOfTheUnderdarkRepository : IRepository<TyrantsOfTheUnderdarkMatch>
{
    Task<TyrantsOfTheUnderdarkMatch> Save(TyrantsOfTheUnderdarkMatch match);
}
