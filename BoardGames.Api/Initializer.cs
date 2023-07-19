using BoardGames.Application.Interfaces;
using BoardGames.Application.Services;

namespace BoardGames;

public static class Initializer
{
    public static void InitializeServices(this IServiceCollection services)
    {
        services.AddScoped<IGetGamesList, GetGamesList>();
    }
}