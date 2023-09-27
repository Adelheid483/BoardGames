﻿using BoardGames.Application.Handlers.GamesStore.Clank.SaveClank;
using BoardGames.Constants;
using BoardGames.Controllers.Attributes;
using BoardGames.Domain.DataModels;
using BoardGames.Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace BoardGames.Controllers;

[ApiController]
public class ClankController : ControllerBase
{
    private readonly IMediator _mediator;

    public ClankController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpPost]
    [ApiRoute(Routes.Clank.Save)]
    public Task<ClankMatch> SaveClank([FromForm] ClankSaveModel model)
    {
        return _mediator.Send(new SaveClankCommand(model));
    }
}