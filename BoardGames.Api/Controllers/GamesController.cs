using BoardGames.Application.Interfaces;
using BoardGames.Constants;
using BoardGames.Controllers.Attributes;
using BoardGames.Domain.DataModels;
using Microsoft.AspNetCore.Mvc;

namespace BoardGames.Controllers;

[ApiController]
public class GamesController : ControllerBase
{
    private readonly IGetGamesList _getGamesList;
    private readonly IGetGameMatchInfo _getGameMatchInfo;

    public GamesController(
        IGetGamesList getGamesList, IGetGameMatchInfo getGameMatchInfo)
    {
        _getGamesList = getGamesList;
        _getGameMatchInfo = getGameMatchInfo;
    }

    [HttpGet]
    [ApiRoute(Routes.Games.List)]
    public Task<List<GameModel>> GetGames()
    {
        return _getGamesList.Get();
    }
    
    [HttpGet]
    [ApiRoute(Routes.Games.MatchInfo)]
    public Task<GameMatchInfoModel> GetGameMatchInfo()
    {
        return _getGameMatchInfo.Get();
    }
}
