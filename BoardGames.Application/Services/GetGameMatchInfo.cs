using BoardGames.Application.Interfaces;
using BoardGames.Domain.DataModels;

namespace BoardGames.Application.Services;

public class GetGameMatchInfo : IGetGameMatchInfo
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