using BoardGames.Application.Interfaces.Repositories;
using BoardGames.Application.Interfaces.Services;
using BoardGames.Application.Interfaces.Services.GamesStore.Clank;
using BoardGames.Application.Interfaces.Services.GamesStore.TyrantsOfTheUnderdark;
using BoardGames.Application.Interfaces.Services.Players;
using BoardGames.Application.Interfaces.Utils;
using BoardGames.Application.Repositories;
using BoardGames.Application.Services;
using BoardGames.Application.Services.GamesStore.Clank;
using BoardGames.Application.Services.GamesStore.TyrantsOfTheUnderdark;
using BoardGames.Application.Services.Players;
using BoardGames.Application.Utils;

namespace BoardGames;

public static class Initializer
{
    public static void InitializeServices(this IServiceCollection services)
    {
        services.AddScoped<IGetGamesService, GetGamesService>();
        services.AddScoped<IGetGameMatchesService, GetGameMatchesService>();
        services.AddScoped<ICreatePlayerService, CreatePlayerService>();
        services.AddScoped<IGetPlayersService, GetPlayersService>();
        services.AddScoped<ISetEntityIdService, SetEntityIdService>();
        services.AddScoped<ISaveTyrantsOfTheUnderdarkMatchService, SaveTyrantsOfTheUnderdarkMatchService>();
        services.AddScoped<ISaveClankMatchService, SaveClankMatchService>();
    }
    
    public static void InitializeRepositories(this IServiceCollection repositories)
    {
        repositories.AddScoped<IGameRepository, GameRepository>();
        repositories.AddScoped<IPlayerRepository, PlayerRepository>();
        repositories.AddScoped<ITyrantsOfTheUnderdarkRepository, TyrantsOfTheUnderdarkRepository>();
        repositories.AddScoped<IClankRepository, ClankRepository>();
    }
}