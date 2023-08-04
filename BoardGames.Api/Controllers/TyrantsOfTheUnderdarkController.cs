using BoardGames.Application.Interfaces;
using BoardGames.Constants;
using BoardGames.Controllers.Attributes;
using BoardGames.Domain.DataModels;
using Microsoft.AspNetCore.Mvc;

namespace BoardGames.Controllers;

[ApiController]
public class TyrantsOfTheUnderdarkController : ControllerBase
{
    private readonly ICounter _counter;

    public TyrantsOfTheUnderdarkController(ICounter counter)
    {
        _counter = counter;
    }

    [HttpPost]
    [ApiRoute(Routes.TyrantsOfTheUnderdark.Count)]
    public Task<int> CountTyrantsOfTheUnderdark([FromForm] TotalCountModel model)
    {
        return _counter.Sum(model);
    }
}