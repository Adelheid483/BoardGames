using BoardGames.Application.Interfaces.Repositories;
using BoardGames.Application.Interfaces.Services.GamesStore.FiveTribes;
using BoardGames.Application.Utils;
using BoardGames.Domain.DataModels.GamesStore.FiveTribes;

namespace BoardGames.Application.Services.GamesStore.FiveTribes;

public class GetFiveTribesMatchInfoService : IGetFiveTribesMatchInfoService
{
    private readonly IFiveTribesRepository _fiveTribesRepository;

    public GetFiveTribesMatchInfoService(IFiveTribesRepository fiveTribesRepository)
    {
        _fiveTribesRepository = fiveTribesRepository;
    }

    public async Task<FiveTribesMatchInfoModel> Get()
    {
        var matchesList = await _fiveTribesRepository.Select();
        int matchNumber;

        if (matchesList.IsNullOrEmpty())
        {
            matchNumber = 1;
        }
        else
        {
            matchNumber = matchesList.Max(n => n.MatchNumber) + 1;
        }
        
        var result = new FiveTribesMatchInfoModel
        {
            MatchId = Guid.NewGuid(),
            MatchNumber = matchNumber,
            DateMatch = DateTime.UtcNow,
        };
            
        return await Task.FromResult(result);
    }
}