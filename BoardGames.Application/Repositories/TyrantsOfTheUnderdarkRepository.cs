using BoardGames.Application.Interfaces.Repositories;
using BoardGames.Domain.Entities;
using BoardGames.Infrastructure;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace BoardGames.Application.Repositories;

public class TyrantsOfTheUnderdarkRepository : ITyrantsOfTheUnderdarkRepository
{
    private readonly ApplicationDbContext _applicationDbContext;

    public TyrantsOfTheUnderdarkRepository(ApplicationDbContext applicationDbContext)
    {
        _applicationDbContext = applicationDbContext;
    }

    public async Task<TyrantsOfTheUnderdarkMatch> Save(TyrantsOfTheUnderdarkMatch match)
    {
        SetEntityId(match);
        EntityEntry<TyrantsOfTheUnderdarkMatch> result = await _applicationDbContext.TyrantsOfTheUnderdarkMatches.AddAsync(match);
        await _applicationDbContext.SaveChangesAsync();

        return result.Entity;
    }

    public Task<List<TyrantsOfTheUnderdarkMatch>> Select()
    {
        throw new NotImplementedException();
    }

    private void SetEntityId(TyrantsOfTheUnderdarkMatch match)
    {
        if (match.Id != default)
        {
            return;
        }

        match.Id = Guid.NewGuid();
    }
}