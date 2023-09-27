using BoardGames.Application.Interfaces.Services;
using BoardGames.Domain.DataModels;
using MediatR;

namespace BoardGames.Application.Handlers.Games.GetGames;

public class GetGamesQueryHandler : IRequestHandler<GetGamesQuery, List<GameModel>>
{
    private readonly IGetGamesService _getGamesService;

    public GetGamesQueryHandler(IGetGamesService getGamesService)
    {
        _getGamesService = getGamesService;
    }

    public Task<List<GameModel>> Handle(GetGamesQuery request, CancellationToken cancellationToken)
    {
        return _getGamesService.Get();
    }
}