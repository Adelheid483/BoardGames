using BoardGames.Application.Interfaces.Services;
using BoardGames.Constants;
using BoardGames.Controllers.Attributes;
using BoardGames.Domain.DataModels;
using BoardGames.Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace BoardGames.Controllers;

[ApiController]
public class TyrantsOfTheUnderdarkController : ControllerBase
{
    private readonly ITyrantsOfTheUnderdarkService _tyrantsOfTheUnderdarkService;

    public TyrantsOfTheUnderdarkController(
        ITyrantsOfTheUnderdarkService tyrantsOfTheUnderdarkService)
    {
        _tyrantsOfTheUnderdarkService = tyrantsOfTheUnderdarkService;
    }

    [HttpPost]
    [ApiRoute(Routes.TyrantsOfTheUnderdark.Save)]
    public async Task<TyrantsOfTheUnderdarkMatch> SaveTyrantsOfTheUnderdark([FromForm] TyrantsOfTheUnderdarkSaveModel model)
    {
        return await _tyrantsOfTheUnderdarkService.Save(model);
    }
}