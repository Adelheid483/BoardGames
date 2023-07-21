using BoardGames.Application.Interfaces;
using BoardGames.Constants;
using BoardGames.Controllers.Attributes;
using BoardGames.Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace BoardGames.Controllers;

[ApiController]
public class GamesController : ControllerBase
{
    private readonly IGetGamesList _getGamesList;

    public GamesController(
        IGetGamesList getGamesList)
    {
        _getGamesList = getGamesList;
    }

    [HttpGet]
    [ApiRoute(Routes.Games.List)]
    public Task<List<Game>> GetGames()
    {
        return _getGamesList.Get();
    }
}
