using BoardGames.Application.Interfaces.Services;
using BoardGames.Constants;
using BoardGames.Controllers.Attributes;
using BoardGames.Domain.DataModels;
using Microsoft.AspNetCore.Mvc;

namespace BoardGames.Controllers;

[ApiController]
public class GamesController : ControllerBase
{
    private readonly IGamesService _gamesService;
    private readonly IGameMatchesService _gameMatchesService;

    public GamesController(
        IGamesService gamesService, IGameMatchesService gameMatchesService)
    {
        _gamesService = gamesService;
        _gameMatchesService = gameMatchesService;
    }

    [HttpGet]
    [ApiRoute(Routes.Games.List)]
    public Task<List<GameModel>> GetGames()
    {
        return _gamesService.Get();
    }
    
    [HttpGet]
    [ApiRoute(Routes.Games.MatchInfo)]
    public Task<GameMatchInfoModel> GetGameMatchInfo()
    {
        return _gameMatchesService.Get();
    }
}
