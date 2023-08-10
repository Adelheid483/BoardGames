using BoardGames.Application.Interfaces;
using BoardGames.Application.Interfaces.Repositories;
using BoardGames.Application.Repositories;
using BoardGames.Application.Services;

namespace BoardGames;

public static class Initializer
{
    public static void InitializeServices(this IServiceCollection services)
    {
        services.AddScoped<IGetGamesList, GetGamesList>();
        services.AddScoped<IGetGameMatchInfo, GetGameMatchInfo>();
        services.AddScoped<ICounter, Counter>();
    }
    
    public static void InitializeRepositories(this IServiceCollection repositories)
    {
        repositories.AddScoped<IGameRepository, GameRepository>();
    }
}