using BoardGames.Constants;
using BoardGames.Controllers.Attributes;
using BoardGames.Domain.DataModels;
using Microsoft.AspNetCore.Mvc;

namespace BoardGames.Controllers;

[ApiController]
public class TyrantsOfTheUnderdarkController : ControllerBase
{
    [HttpPost]
    [ApiRoute(Routes.TyrantsOfTheUnderdark.Save)]
    public Task<int> SaveTyrantsOfTheUnderdark([FromForm] TyrantsOfTheUnderdarkSaveModel model)
    {
        return Task.FromResult(10);
    }
}