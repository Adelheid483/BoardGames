using BoardGames.Application.Interfaces.Services.GamesStore.TyrantsOfTheUnderdark;
using BoardGames.Domain.DataModels.GamesStore.TyrantsOfTheUnderdark;
using MediatR;

namespace BoardGames.Application.Handlers.GamesStore.TyrantsOfTheUnderdark.GetTyrantsOfTheUnderdarkMatchInfo;

public class GetTyrantsOfTheUnderdarkMatchInfoCommandHandler
    : IRequestHandler<GetTyrantsOfTheUnderdarkMatchInfoCommand, TyrantsOfTheUnderdarkMatchInfoModel>
{
    private readonly IGetTyrantsOfTheUnderdarkMatchInfoService _getTyrantsOfTheUnderdarkMatchInfoService;

    public GetTyrantsOfTheUnderdarkMatchInfoCommandHandler(
        IGetTyrantsOfTheUnderdarkMatchInfoService getTyrantsOfTheUnderdarkMatchInfoService)
    {
        _getTyrantsOfTheUnderdarkMatchInfoService = getTyrantsOfTheUnderdarkMatchInfoService;
    }

    public Task<TyrantsOfTheUnderdarkMatchInfoModel> Handle(
        GetTyrantsOfTheUnderdarkMatchInfoCommand request,
        CancellationToken cancellationToken)
    {
        return _getTyrantsOfTheUnderdarkMatchInfoService.Get();
    }
}