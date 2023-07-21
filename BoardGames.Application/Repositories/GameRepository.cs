using BoardGames.Application.Interfaces.Repositories;
using BoardGames.Domain.Entities;
using BoardGames.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace BoardGames.Application.Repositories;

public class GameRepository : IGameRepository
{
    private readonly ApplicationDbContext _applicationDbContext;

    public GameRepository(ApplicationDbContext applicationDbContext)
    {
        _applicationDbContext = applicationDbContext;
    }

    public async Task<Game> GetByName(string name)
    {
        return await _applicationDbContext.Games.FirstOrDefaultAsync(item => item.Name == name);
    }

    public async Task<Game> GetById(Guid id)
    {
        return await _applicationDbContext.Games.FirstOrDefaultAsync(item => item.Id == id);
    }

    public async Task<Game> Add(Game entity)
    {
        SetEntityId(entity);
        EntityEntry<Game> result = await _applicationDbContext.Games.AddAsync(entity);
        await _applicationDbContext.SaveChangesAsync();
        
        return result.Entity;
    }

    public Task<List<Game>> Select()
    {
        return _applicationDbContext.Games.ToListAsync();
    }
    
    private void SetEntityId(Game entity)
    {
        if (entity.Id != default)
        {
            return;
        }

        entity.Id = Guid.NewGuid();
    }
}