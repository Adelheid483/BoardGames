using BoardGames.Domain.Entities;

namespace BoardGames.Application.Interfaces.Repositories;

public interface ITyrantsOfTheUnderdarkRepository : IRepository<TyrantsOfTheUnderdarkMatch>
{
    Task<TyrantsOfTheUnderdarkMatch> Save(TyrantsOfTheUnderdarkMatch match);

    Task<List<TyrantsOfTheUnderdarkMatch>> Select();

    Task<List<TyrantsOfTheUnderdarkMatch>> SelectById(Guid id);
}
