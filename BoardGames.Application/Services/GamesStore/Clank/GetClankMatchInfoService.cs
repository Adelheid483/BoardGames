using BoardGames.Application.Interfaces.Repositories;
using BoardGames.Application.Interfaces.Services.GamesStore.Clank;
using BoardGames.Application.Utils;
using BoardGames.Domain.DataModels.GamesStore.Clank;

namespace BoardGames.Application.Services.GamesStore.Clank;

public class GetClankMatchInfoService : IGetClankMatchInfoService
{
    private readonly IClankRepository _clankRepository;

    public GetClankMatchInfoService(IClankRepository clankRepository)
    {
        _clankRepository = clankRepository;
    }

    public async Task<ClankMatchInfoModel> Get()
    {
        var matchesList = await _clankRepository.Select();
        int matchNumber;

        if (matchesList.IsNullOrEmpty())
        {
            matchNumber = 1;
        }
        else
        {
            matchNumber = matchesList.Max(n => n.MatchNumber) + 1;
        }
        
        var result = new ClankMatchInfoModel
        {
            MatchId = Guid.NewGuid(),
            MatchNumber = matchNumber,
            DateMatch = DateTime.UtcNow,
        };
            
        return await Task.FromResult(result);
    }
}