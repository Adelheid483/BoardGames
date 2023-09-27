using BoardGames.Application.Interfaces.Repositories;
using BoardGames.Application.Interfaces.Utils;
using BoardGames.Domain.Entities;
using BoardGames.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace BoardGames.Application.Repositories;

public class TyrantsOfTheUnderdarkRepository : ITyrantsOfTheUnderdarkRepository
{
    private readonly ApplicationDbContext _applicationDbContext;
    private readonly ISetEntityIdService _setEntityIdService;

    public TyrantsOfTheUnderdarkRepository(
        ApplicationDbContext applicationDbContext,
        ISetEntityIdService setEntityIdService)
    {
        _applicationDbContext = applicationDbContext;
        _setEntityIdService = setEntityIdService;
    }

    public async Task<TyrantsOfTheUnderdarkMatch> Save(TyrantsOfTheUnderdarkMatch match)
    {
        _setEntityIdService.Set(match);
        EntityEntry<TyrantsOfTheUnderdarkMatch> result = await _applicationDbContext.TyrantsOfTheUnderdarkMatches.AddAsync(match);
        await _applicationDbContext.SaveChangesAsync();

        return result.Entity;
    }

    public Task<List<TyrantsOfTheUnderdarkMatch>> Select()
    {
        return _applicationDbContext.TyrantsOfTheUnderdarkMatches.ToListAsync();
    }
    
    public Task<List<TyrantsOfTheUnderdarkMatch>> SelectById(Guid id)
    {
        return _applicationDbContext.TyrantsOfTheUnderdarkMatches.Where(s => s.MatchId == id).ToListAsync();
    }
}