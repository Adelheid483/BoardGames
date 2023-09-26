using BoardGames.Application.Common;
using BoardGames.Domain.DataModels;

namespace BoardGames.Application.Interfaces.Services.Players;

public interface ICreatePlayerService
{
    Task<Result> Create(PlayerCreateModel model);
}