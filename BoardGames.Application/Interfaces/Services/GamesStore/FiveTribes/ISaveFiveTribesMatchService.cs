using BoardGames.Domain.DataModels.GamesStore.FiveTribes;
using BoardGames.Domain.Entities;

namespace BoardGames.Application.Interfaces.Services.GamesStore.FiveTribes;

public interface ISaveFiveTribesMatchService
{
    Task<FiveTribesMatch> Save(FiveTribesSaveModel model);
}
