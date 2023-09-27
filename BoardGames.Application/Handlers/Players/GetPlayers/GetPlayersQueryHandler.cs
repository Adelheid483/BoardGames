using BoardGames.Application.Interfaces.Services.Players;
using BoardGames.Domain.DataModels;
using MediatR;

namespace BoardGames.Application.Handlers.Players.GetPlayers;

public class GetPlayersQueryHandler : IRequestHandler<GetPlayersQuery, List<PlayerModel>>
{
    private readonly IGetPlayersService _getPlayersService;

    public GetPlayersQueryHandler(IGetPlayersService getPlayersService)
    {
        _getPlayersService = getPlayersService;
    }

    public async Task<List<PlayerModel>> Handle(GetPlayersQuery request, CancellationToken cancellationToken)
    {
        return await _getPlayersService.Get();
    }
}