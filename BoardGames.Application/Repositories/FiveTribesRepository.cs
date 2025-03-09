using BoardGames.Application.Interfaces.Repositories;
using BoardGames.Application.Interfaces.Utils;
using BoardGames.Domain.Entities;
using BoardGames.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace BoardGames.Application.Repositories;

public class FiveTribesRepository : IFiveTribesRepository
{
    private readonly ApplicationDbContext _applicationDbContext;
    private readonly ISetEntityIdService _setEntityIdService;

    public FiveTribesRepository(
        ApplicationDbContext applicationDbContext,
        ISetEntityIdService setEntityIdService)
    {
        _applicationDbContext = applicationDbContext;
        _setEntityIdService = setEntityIdService;
    }

    public async Task<FiveTribesMatch> Save(FiveTribesMatch match)
    {
        _setEntityIdService.Set(match);
        EntityEntry<FiveTribesMatch> result = await _applicationDbContext.FiveTribesMatch.AddAsync(match);
        await _applicationDbContext.SaveChangesAsync();

        return result.Entity;
    }

    public Task<List<FiveTribesMatch>> Select()
    {
        return _applicationDbContext.FiveTribesMatch.ToListAsync();
    }
    
    public Task<List<FiveTribesMatch>> SelectById(Guid id)
    {
        return _applicationDbContext.FiveTribesMatch.Where(m => m.MatchId == id).ToListAsync();
    }
}