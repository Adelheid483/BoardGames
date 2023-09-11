using BoardGames.Application.Interfaces.Repositories;
using BoardGames.Application.Interfaces.Utils;
using BoardGames.Domain.Entities;
using BoardGames.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace BoardGames.Application.Repositories;

public class PlayerRepository : IPlayerRepository
{
    private readonly ApplicationDbContext _applicationDbContext;
    private readonly ISetEntityIdService _setEntityIdService;

    public PlayerRepository(
        ApplicationDbContext applicationDbContext,
        ISetEntityIdService setEntityIdService)
    {
        _applicationDbContext = applicationDbContext;
        _setEntityIdService = setEntityIdService;
    }
    
    public Task<List<Player>> Select()
    {
        return _applicationDbContext.Players.ToListAsync();
    }

    public async Task<Player> Add(Player player)
    {
        _setEntityIdService.Set(player);
        EntityEntry<Player> result = await _applicationDbContext.Players.AddAsync(player);
        await _applicationDbContext.SaveChangesAsync();

        return result.Entity;
    }
}