using BoardGames.Application.Interfaces.Repositories;
using BoardGames.Application.Interfaces.Services;
using BoardGames.Application.Interfaces.Utils;
using BoardGames.Application.Repositories;
using BoardGames.Application.Services;
using BoardGames.Application.Utils;

namespace BoardGames;

public static class Initializer
{
    public static void InitializeServices(this IServiceCollection services)
    {
        services.AddScoped<IGamesService, GamesService>();
        services.AddScoped<IGameMatchesService, GameMatchesService>();
        services.AddScoped<IPlayersService, PlayersService>();
        services.AddScoped<ITyrantsOfTheUnderdarkService, TyrantsOfTheUnderdarkService>();
        services.AddScoped<ISetEntityIdService, SetEntityIdService>();
    }
    
    public static void InitializeRepositories(this IServiceCollection repositories)
    {
        repositories.AddScoped<IGameRepository, GameRepository>();
        repositories.AddScoped<IPlayerRepository, PlayerRepository>();
        repositories.AddScoped<ITyrantsOfTheUnderdarkRepository, TyrantsOfTheUnderdarkRepository>();
    }
}