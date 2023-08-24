using BoardGames.Application.Common;
using BoardGames.Domain.DataModels;

namespace BoardGames.Application.Interfaces.Services;

public interface IPlayersService
{
    Task<Result> Create(PlayerCreateModel model);

    Task<List<PlayerModel>> Get();
}