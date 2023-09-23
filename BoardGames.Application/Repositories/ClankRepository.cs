using BoardGames.Application.Interfaces.Repositories;
using BoardGames.Application.Interfaces.Utils;
using BoardGames.Domain.Entities;
using BoardGames.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace BoardGames.Application.Repositories;

public class ClankRepository : IClankRepository
{
    private readonly ApplicationDbContext _applicationDbContext;
    private readonly ISetEntityIdService _setEntityIdService;

    public ClankRepository(
        ApplicationDbContext applicationDbContext,
        ISetEntityIdService setEntityIdService)
    {
        _applicationDbContext = applicationDbContext;
        _setEntityIdService = setEntityIdService;
    }

    public async Task<ClankMatch> Save(ClankMatch match)
    {
        _setEntityIdService.Set(match);
        EntityEntry<ClankMatch> result = await _applicationDbContext.ClankMatch.AddAsync(match);
        await _applicationDbContext.SaveChangesAsync();

        return result.Entity;
    }

    public Task<List<ClankMatch>> Select()
    {
        return _applicationDbContext.ClankMatch.ToListAsync();
    }
    
    public Task<List<ClankMatch>> SelectById(Guid id)
    {
        return _applicationDbContext.ClankMatch.Where(m => m.GameId == id).ToListAsync();
    }
}