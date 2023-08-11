using BoardGames.Application.Interfaces.Repositories;
using BoardGames.Domain.Entities;
using BoardGames.Infrastructure;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace BoardGames.Application.Repositories;

public class PlayerRepository : IPlayerRepository
{
    private readonly ApplicationDbContext _applicationDbContext;

    public PlayerRepository(ApplicationDbContext applicationDbContext)
    {
        _applicationDbContext = applicationDbContext;
    }
    
    public async Task<Player> Add(Player player)
    {
        SetEntityId(player);
        EntityEntry<Player> result = await _applicationDbContext.Players.AddAsync(player);

        return result.Entity;
    }
    
    private void SetEntityId(Player entity)
    {
        if (entity.Id != default)
        {
            return;
        }

        entity.Id = Guid.NewGuid();
    }
}