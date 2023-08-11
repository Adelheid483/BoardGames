using BoardGames.Application.Interfaces.Services;
using BoardGames.Domain.DataModels;

namespace BoardGames.Application.Services;

public class GameMatchesService : IGameMatchesService
{
    public Task<GameMatchInfoModel> Get()
    {
        var result = new GameMatchInfoModel
        {
            MatchId = Guid.NewGuid(),
            DateMatch = DateTime.UtcNow,
        };
            
        return Task.FromResult(result);
    }
}