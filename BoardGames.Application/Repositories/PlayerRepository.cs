using BoardGames.Application.Interfaces.Repositories;
using BoardGames.Domain.Entities;
using BoardGames.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace BoardGames.Application.Repositories;

public class PlayerRepository : IPlayerRepository
{
    private readonly ApplicationDbContext _applicationDbContext;

    public PlayerRepository(ApplicationDbContext applicationDbContext)
    {
        _applicationDbContext = applicationDbContext;
    }
    
    public Task<List<Player>> Select()
    {
        return _applicationDbContext.Players.ToListAsync();
    }

    public async Task<Player> Add(Player player)
    {
        SetEntityId(player);
        EntityEntry<Player> result = await _applicationDbContext.Players.AddAsync(player);
        await _applicationDbContext.SaveChangesAsync();

        return result.Entity;
    }
    
    private void SetEntityId(Player player)
    {
        if (player.Id != default)
        {
            return;
        }

        player.Id = Guid.NewGuid();
    }
}