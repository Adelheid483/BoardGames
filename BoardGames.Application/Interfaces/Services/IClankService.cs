using BoardGames.Domain.DataModels;
using BoardGames.Domain.Entities;

namespace BoardGames.Application.Interfaces.Services;

public interface IClankService
{
    Task<ClankMatch> Save(ClankSaveModel model);
}
