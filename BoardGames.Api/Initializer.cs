using BoardGames.Application.Interfaces;
using BoardGames.Application.Interfaces.Games;
using BoardGames.Application.Services;
using BoardGames.Application.Services.Games;

namespace BoardGames;

public static class Initializer
{
    public static void InitializeServices(this IServiceCollection services)
    {
        services.AddScoped<IGetGamesList, GetGamesList>();
        services.AddScoped<IGetTyrantsOfTheUnderdark, GetTyrantsOfTheUnderdark>();
    }
}