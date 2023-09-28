using BoardGames.Application.Interfaces.Repositories;
using BoardGames.Application.Interfaces.Services.GamesStore.TyrantsOfTheUnderdark;
using BoardGames.Application.Utils;
using BoardGames.Domain.DataModels.GamesStore.TyrantsOfTheUnderdark;

namespace BoardGames.Application.Services.GamesStore.TyrantsOfTheUnderdark;

public class GetTyrantsOfTheUnderdarkMatchInfoService : IGetTyrantsOfTheUnderdarkMatchInfoService
{
    private readonly ITyrantsOfTheUnderdarkRepository _tyrantsOfTheUnderdarkRepository;

    public GetTyrantsOfTheUnderdarkMatchInfoService(ITyrantsOfTheUnderdarkRepository tyrantsOfTheUnderdarkRepository)
    {
        _tyrantsOfTheUnderdarkRepository = tyrantsOfTheUnderdarkRepository;
    }

    public async Task<TyrantsOfTheUnderdarkMatchInfoModel> Get()
    {
        var matchesList = await _tyrantsOfTheUnderdarkRepository.Select();
        int matchNumber;

        if (matchesList.IsNullOrEmpty())
        {
            matchNumber = 1;
        }
        else
        {
            matchNumber = matchesList.Max(n => n.MatchNumber) + 1;
        }
        
        var result = new TyrantsOfTheUnderdarkMatchInfoModel
        {
            MatchId = Guid.NewGuid(),
            MatchNumber = matchNumber,
            DateMatch = DateTime.UtcNow,
        };
            
        return await Task.FromResult(result);
    }
}