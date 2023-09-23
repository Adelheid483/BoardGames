using BoardGames.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace BoardGames.Infrastructure;

public class ApplicationDbContext : DbContext
{
    public DbSet<Game> Games { get; set; }
    public DbSet<Player> Players { get; set; }
    public DbSet<TyrantsOfTheUnderdarkMatch> TyrantsOfTheUnderdarkMatches { get; set; }
    public DbSet<ClankMatch> ClankMatch { get; set; }

    public ApplicationDbContext(DbContextOptions options) : base(options) 
    { 
    }
}