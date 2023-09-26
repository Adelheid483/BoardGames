using BoardGames.Application.Common;
using BoardGames.Application.Interfaces.Services.Players;
using BoardGames.Constants;
using BoardGames.Controllers.Attributes;
using BoardGames.Domain.DataModels;
using Microsoft.AspNetCore.Mvc;

namespace BoardGames.Controllers;

[ApiController]
public class PlayersController : ControllerBase
{
    private readonly ICreatePlayerService _createPlayerService;
    private readonly IGetPlayersService _getPlayersService;

    public PlayersController(ICreatePlayerService createPlayerService, IGetPlayersService getPlayersService)
    {
        _createPlayerService = createPlayerService;
        _getPlayersService = getPlayersService;
    }

    [HttpPost]
    [ApiRoute(Routes.Players.Create)]
    public async Task<Result> CreateNewPlayer([FromForm] PlayerCreateModel model)
    {
        return await _createPlayerService.Create(model);
    }
    
    [HttpGet]
    [ApiRoute(Routes.Players.List)]
    public Task<List<PlayerModel>> GetPlayers()
    {
        return _getPlayersService.Get();
    }
}