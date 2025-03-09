using BoardGames.Application.Interfaces.Services.GamesStore.FiveTribes;
using BoardGames.Domain.DataModels.GamesStore.FiveTribes;
using MediatR;

namespace BoardGames.Application.Handlers.GamesStore.FiveTribes.GetFiveTribesMatchInfo;

public class GetFiveTribesMatchInfoCommandHandler : IRequestHandler<GetFiveTribesMatchInfoCommand, FiveTribesMatchInfoModel>
{
    private readonly IGetFiveTribesMatchInfoService _getFiveTribesMatchInfoService;

    public GetFiveTribesMatchInfoCommandHandler(IGetFiveTribesMatchInfoService getFiveTribesMatchInfoService)
    {
        _getFiveTribesMatchInfoService = getFiveTribesMatchInfoService;
    }

    public Task<FiveTribesMatchInfoModel> Handle(GetFiveTribesMatchInfoCommand request, CancellationToken cancellationToken)
    {
        return _getFiveTribesMatchInfoService.Get();
    }
}