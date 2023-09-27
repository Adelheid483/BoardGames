using BoardGames.Application.Handlers.GamesStore.TyrantsOfTheUnderdark.SaveTyrantsOfTheUnderdark;
using BoardGames.Constants;
using BoardGames.Controllers.Attributes;
using BoardGames.Domain.DataModels;
using BoardGames.Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace BoardGames.Controllers;

[ApiController]
public class TyrantsOfTheUnderdarkController : ControllerBase
{
    private readonly IMediator _mediator;

    public TyrantsOfTheUnderdarkController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpPost]
    [ApiRoute(Routes.TyrantsOfTheUnderdark.Save)]
    public Task<TyrantsOfTheUnderdarkMatch> SaveTyrantsOfTheUnderdark([FromForm] TyrantsOfTheUnderdarkSaveModel model)
    {
        return _mediator.Send(new SaveTyrantsOfTheUnderdarkCommand(model));
    }
}