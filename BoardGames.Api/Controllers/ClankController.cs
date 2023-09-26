using BoardGames.Application.Interfaces.Services.GamesStore.Clank;
using BoardGames.Constants;
using BoardGames.Controllers.Attributes;
using BoardGames.Domain.DataModels;
using BoardGames.Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace BoardGames.Controllers;

[ApiController]
public class ClankController : ControllerBase
{
    private readonly ISaveClankMatchService _saveClankMatchService;

    public ClankController(
        ISaveClankMatchService saveClankMatchService)
    {
        _saveClankMatchService = saveClankMatchService;
    }

    [HttpPost]
    [ApiRoute(Routes.Clank.Save)]
    public async Task<ClankMatch> SaveClank([FromForm] ClankSaveModel model)
    {
        return await _saveClankMatchService.Save(model);
    }
}