using BoardGames.Application.Interfaces.Services;
using BoardGames.Domain.DataModels;
using MediatR;

namespace BoardGames.Application.Handlers.Games.GetGameMatchInfo;

public class GetGameMatchInfoCommandHandler : IRequestHandler<GetGameMatchInfoCommand, GameMatchInfoModel>
{
    private readonly IGetGameMatchesService _getGameMatchesService;

    public GetGameMatchInfoCommandHandler(IGetGameMatchesService getGameMatchesService)
    {
        _getGameMatchesService = getGameMatchesService;
    }

    public Task<GameMatchInfoModel> Handle(GetGameMatchInfoCommand request, CancellationToken cancellationToken)
    {
        return _getGameMatchesService.Get();
    }
}