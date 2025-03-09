using BoardGames.Application.Handlers.GamesStore.FiveTribes.GetFiveTribesMatchInfo;
using BoardGames.Application.Handlers.GamesStore.FiveTribes.SaveFiveTribes;
using BoardGames.Constants;
using BoardGames.Controllers.Attributes;
using BoardGames.Domain.DataModels.GamesStore.FiveTribes;
using BoardGames.Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace BoardGames.Controllers;

[ApiController]
public class FiveTribesController : ControllerBase
{
    private readonly IMediator _mediator;

    public FiveTribesController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpPost]
    [ApiRoute(Routes.FiveTribes.Save)]
    public Task<FiveTribesMatch> SaveFiveTribes([FromForm] FiveTribesSaveModel model)
    {
        return _mediator.Send(new SaveFiveTribesCommand(model));
    }
    
    [HttpGet]
    [ApiRoute(Routes.FiveTribes.MatchInfo)]
    public Task<FiveTribesMatchInfoModel> GetFiveTribesMatchInfo()
    {
        return _mediator.Send(new GetFiveTribesMatchInfoCommand());
    }
}