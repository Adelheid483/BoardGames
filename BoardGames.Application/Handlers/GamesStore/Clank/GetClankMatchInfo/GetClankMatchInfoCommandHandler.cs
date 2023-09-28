using BoardGames.Application.Interfaces.Services.GamesStore.Clank;
using BoardGames.Domain.DataModels.GamesStore.Clank;
using MediatR;

namespace BoardGames.Application.Handlers.GamesStore.Clank.GetClankMatchInfo;

public class GetClankMatchInfoCommandHandler : IRequestHandler<GetClankMatchInfoCommand, ClankMatchInfoModel>
{
    private readonly IGetClankMatchInfoService _getClankMatchInfoService;

    public GetClankMatchInfoCommandHandler(IGetClankMatchInfoService getClankMatchInfoService)
    {
        _getClankMatchInfoService = getClankMatchInfoService;
    }

    public Task<ClankMatchInfoModel> Handle(GetClankMatchInfoCommand request, CancellationToken cancellationToken)
    {
        return _getClankMatchInfoService.Get();
    }
}