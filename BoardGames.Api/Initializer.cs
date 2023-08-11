using BoardGames.Application.Interfaces.Repositories;
using BoardGames.Application.Interfaces.Services;
using BoardGames.Application.Repositories;
using BoardGames.Application.Services;

namespace BoardGames;

public static class Initializer
{
    public static void InitializeServices(this IServiceCollection services)
    {
        services.AddScoped<IGamesService, GamesService>();
        services.AddScoped<IGameMatchesService, GameMatchesService>();
        services.AddScoped<IPlayersService, PlayersService>();
    }
    
    public static void InitializeRepositories(this IServiceCollection repositories)
    {
        repositories.AddScoped<IGameRepository, GameRepository>();
        repositories.AddScoped<IPlayerRepository, PlayerRepository>();
    }
}