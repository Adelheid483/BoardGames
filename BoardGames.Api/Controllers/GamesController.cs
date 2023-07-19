using BoardGames.Application.Interfaces;
using BoardGames.Application.Interfaces.Games;
using BoardGames.Constants;
using BoardGames.Controllers.Attributes;
using BoardGames.Domain.DataModels;
using Microsoft.AspNetCore.Mvc;

namespace BoardGames.Controllers;

[ApiController]
public class GamesController : ControllerBase
{
    private readonly IGetGamesList _getGamesList;
    private readonly IGetTyrantsOfTheUnderdark _getTyrantsOfTheUnderdark;

    public GamesController(
        IGetGamesList getGamesList,
        IGetTyrantsOfTheUnderdark getTyrantsOfTheUnderdark)
    {
        _getGamesList = getGamesList;
        _getTyrantsOfTheUnderdark = getTyrantsOfTheUnderdark;
    }

    [HttpGet]
    [ApiRoute(Routes.Games.List)]
    public List<GameModel> GetGames()
    {
        return _getGamesList.Get();
    }
    
    [HttpGet]
    [ApiRoute(Routes.Games.TyrantsOfTheUnderdark)]
    public List<string> GetTyrantsOfTheUnderdark()
    {
        return _getTyrantsOfTheUnderdark.Get();
    }
}
