using BoardGames.Application.Common;
using BoardGames.Application.Handlers.Players.CreateNewPlayer;
using BoardGames.Application.Handlers.Players.GetPlayers;
using BoardGames.Constants;
using BoardGames.Controllers.Attributes;
using BoardGames.Domain.DataModels;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace BoardGames.Controllers;

[ApiController]
public class PlayersController : ControllerBase
{
    private readonly IMediator _mediator;

    public PlayersController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpPost]
    [ApiRoute(Routes.Players.Create)]
    public Task<Result> CreateNewPlayer([FromForm] PlayerCreateModel model)
    {
        return _mediator.Send(new CreateNewPlayerCommand(model));
    }
    
    [HttpGet]
    [ApiRoute(Routes.Players.List)]
    public Task<List<PlayerModel>> GetPlayers()
    {
        return _mediator.Send(new GetPlayersQuery());
    }
}