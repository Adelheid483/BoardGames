using BoardGames.Application.Interfaces.Services;
using BoardGames.Constants;
using BoardGames.Controllers.Attributes;
using BoardGames.Domain.DataModels;
using BoardGames.Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace BoardGames.Controllers;

[ApiController]
public class ClankController : ControllerBase
{
    private readonly IClankService _clankService;

    public ClankController(
        IClankService clankService)
    {
        _clankService = clankService;
    }

    [HttpPost]
    [ApiRoute(Routes.Clank.Save)]
    public async Task<ClankMatch> SaveClank([FromForm] ClankSaveModel model)
    {
        return await _clankService.Save(model);
    }
}