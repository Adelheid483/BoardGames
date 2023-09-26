using BoardGames.Application.Interfaces.Services;
using BoardGames.Constants;
using BoardGames.Controllers.Attributes;
using BoardGames.Domain.DataModels;
using Microsoft.AspNetCore.Mvc;

namespace BoardGames.Controllers;

[ApiController]
public class GamesController : ControllerBase
{
    private readonly IGetGamesService _getGamesService;
    private readonly IGetGameMatchesService _getGameMatchesService;

    public GamesController(
        IGetGamesService getGamesService,
        IGetGameMatchesService getGameMatchesService)
    {
        _getGamesService = getGamesService;
        _getGameMatchesService = getGameMatchesService;
    }

    [HttpGet]
    [ApiRoute(Routes.Games.List)]
    public Task<List<GameModel>> GetGames()
    {
        return _getGamesService.Get();
    }
    
    [HttpGet]
    [ApiRoute(Routes.Games.MatchInfo)]
    public Task<GameMatchInfoModel> GetGameMatchInfo()
    {
        return _getGameMatchesService.Get();
    }
}
