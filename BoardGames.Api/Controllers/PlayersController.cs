using BoardGames.Application.Interfaces;
using BoardGames.Constants;
using BoardGames.Controllers.Attributes;
using BoardGames.Domain.DataModels;
using BoardGames.Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace BoardGames.Controllers;

[ApiController]
public class PlayersController : ControllerBase
{
    private readonly IPlayersService _playersService;

    public PlayersController(IPlayersService playersService)
    {
        _playersService = playersService;
    }

    [HttpPost]
    [ApiRoute(Routes.Players.Create)]
    public async Task<Player> CreateNewPlayer([FromForm] PlayerCreateModel model)
    {
        return await _playersService.Create(model);
    }
}