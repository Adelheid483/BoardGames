using Microsoft.AspNetCore.Mvc;

namespace BoardGames.Controllers;

[Route("api/games")]
[ApiController]
public class ValuesController : ControllerBase
{
    [HttpGet]
    public IActionResult GetGames() {
        var games = new[]
        {
            new {Name = "1"},
            new {Name = "2"},
            new {Name = "3"},
        };

        return Ok(games);
    }
}