using BoardGames.Application.Interfaces.Services.GamesStore.TyrantsOfTheUnderdark;
using BoardGames.Domain.Entities;
using MediatR;

namespace BoardGames.Application.Handlers.GamesStore.TyrantsOfTheUnderdark.SaveTyrantsOfTheUnderdark;

public class SaveTyrantsOfTheUnderdarkCommandHandler
    : IRequestHandler<SaveTyrantsOfTheUnderdarkCommand, TyrantsOfTheUnderdarkMatch>
{
    private readonly ISaveTyrantsOfTheUnderdarkMatchService _saveTyrantsOfTheUnderdarkMatchService;

    public SaveTyrantsOfTheUnderdarkCommandHandler(
        ISaveTyrantsOfTheUnderdarkMatchService saveTyrantsOfTheUnderdarkMatchService)
    {
        _saveTyrantsOfTheUnderdarkMatchService = saveTyrantsOfTheUnderdarkMatchService;
    }

    public async Task<TyrantsOfTheUnderdarkMatch> Handle(
        SaveTyrantsOfTheUnderdarkCommand request,
        CancellationToken cancellationToken)
    {
        return await _saveTyrantsOfTheUnderdarkMatchService.Save(request.Model);
    }
}