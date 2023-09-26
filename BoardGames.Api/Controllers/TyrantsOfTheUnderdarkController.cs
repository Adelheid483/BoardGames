using BoardGames.Application.Interfaces.Services.GamesStore.TyrantsOfTheUnderdark;
using BoardGames.Constants;
using BoardGames.Controllers.Attributes;
using BoardGames.Domain.DataModels;
using BoardGames.Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace BoardGames.Controllers;

[ApiController]
public class TyrantsOfTheUnderdarkController : ControllerBase
{
    private readonly ISaveTyrantsOfTheUnderdarkMatchService _saveTyrantsOfTheUnderdarkMatchService;

    public TyrantsOfTheUnderdarkController(
        ISaveTyrantsOfTheUnderdarkMatchService saveTyrantsOfTheUnderdarkMatchService)
    {
        _saveTyrantsOfTheUnderdarkMatchService = saveTyrantsOfTheUnderdarkMatchService;
    }

    [HttpPost]
    [ApiRoute(Routes.TyrantsOfTheUnderdark.Save)]
    public async Task<TyrantsOfTheUnderdarkMatch> SaveTyrantsOfTheUnderdark([FromForm] TyrantsOfTheUnderdarkSaveModel model)
    {
        return await _saveTyrantsOfTheUnderdarkMatchService.Save(model);
    }
}