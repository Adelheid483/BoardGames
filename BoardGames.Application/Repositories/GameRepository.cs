using BoardGames.Application.Interfaces.Repositories;
using BoardGames.Domain.Entities;
using BoardGames.Infrastructure;
using Microsoft.EntityFrameworkCore;

namespace BoardGames.Application.Repositories;

public class GameRepository : IGameRepository
{
    private readonly ApplicationDbContext _applicationDbContext;

    public GameRepository(ApplicationDbContext applicationDbContext)
    {
        _applicationDbContext = applicationDbContext;
    }

    public Task<List<Game>> Select()
    {
        return _applicationDbContext.Games.ToListAsync();
    }
}