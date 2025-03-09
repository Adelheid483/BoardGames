using BoardGames.Application.Handlers.Players.GetPlayers;
using BoardGames.Application.Interfaces.Repositories;
using BoardGames.Application.Interfaces.Services;
using BoardGames.Application.Interfaces.Services.GamesStore.Clank;
using BoardGames.Application.Interfaces.Services.GamesStore.FiveTribes;
using BoardGames.Application.Interfaces.Services.GamesStore.TyrantsOfTheUnderdark;
using BoardGames.Application.Interfaces.Services.Players;
using BoardGames.Application.Interfaces.Utils;
using BoardGames.Application.Repositories;
using BoardGames.Application.Services;
using BoardGames.Application.Services.GamesStore.Clank;
using BoardGames.Application.Services.GamesStore.FiveTribes;
using BoardGames.Application.Services.GamesStore.TyrantsOfTheUnderdark;
using BoardGames.Application.Services.Players;
using BoardGames.Application.Utils;

namespace BoardGames;

public static class Initializer
{
    public static void InitializeServices(this IServiceCollection services)
    {
        services.AddScoped<IGetGamesService, GetGamesService>();
        services.AddScoped<ICreatePlayerService, CreatePlayerService>();
        services.AddScoped<IGetPlayersService, GetPlayersService>();
        services.AddScoped<ISetEntityIdService, SetEntityIdService>();
        
        // games store
        services.AddScoped<IGetClankMatchInfoService, GetClankMatchInfoService>();
        services.AddScoped<ISaveClankMatchService, SaveClankMatchService>();
        services.AddScoped<IGetTyrantsOfTheUnderdarkMatchInfoService, GetTyrantsOfTheUnderdarkMatchInfoService>();
        services.AddScoped<ISaveTyrantsOfTheUnderdarkMatchService, SaveTyrantsOfTheUnderdarkMatchService>();
        services.AddScoped<IGetFiveTribesMatchInfoService, GetFiveTribesMatchInfoService>();
        services.AddScoped<ISaveFiveTribesMatchService, SaveFiveTribesMatchService>();
    }
    
    public static void InitializeRepositories(this IServiceCollection repositories)
    {
        repositories.AddScoped<IGameRepository, GameRepository>();
        repositories.AddScoped<IPlayerRepository, PlayerRepository>();
        
        // games store
        repositories.AddScoped<ITyrantsOfTheUnderdarkRepository, TyrantsOfTheUnderdarkRepository>();
        repositories.AddScoped<IClankRepository, ClankRepository>();
        repositories.AddScoped<IFiveTribesRepository, FiveTribesRepository>();
    }
    
    public static void InitializeMediators(this IServiceCollection mediators)
    {
        mediators.AddMediatR(x => x.RegisterServicesFromAssemblies(
            typeof(GetPlayersQueryHandler).Assembly,
            typeof(GetPlayersQuery).Assembly));
    }
}