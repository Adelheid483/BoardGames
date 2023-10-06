using BoardGames.Application.Handlers.Games.GetGames;
using BoardGames.Constants;
using BoardGames.Controllers.Attributes;
using BoardGames.Domain.DataModels;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace BoardGames.Controllers;

[ApiController]
public class GamesController : ControllerBase
{
    private readonly IMediator _mediator;

    public GamesController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpGet]
    [ApiRoute(Routes.Games.List)]
    public Task<List<GameModel>> GetGames()
    {
        return _mediator.Send(new GetGamesQuery());
    }
}
