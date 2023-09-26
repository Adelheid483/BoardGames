using BoardGames.Domain.DataModels;
using BoardGames.Domain.Entities;

namespace BoardGames.Application.Interfaces.Services.GamesStore.Clank;

public interface ISaveClankMatchService
{
    Task<ClankMatch> Save(ClankSaveModel model);
}
