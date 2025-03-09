using BoardGames.Application.Interfaces.Services.GamesStore.FiveTribes;
using BoardGames.Domain.Entities;
using MediatR;

namespace BoardGames.Application.Handlers.GamesStore.FiveTribes.SaveFiveTribes;

public class SaveFiveTribesCommandHandler : IRequestHandler<SaveFiveTribesCommand, FiveTribesMatch>
{
    private readonly ISaveFiveTribesMatchService _saveFiveTribesMatchService;

    public SaveFiveTribesCommandHandler(ISaveFiveTribesMatchService saveFiveTribesMatchService)
    {
        _saveFiveTribesMatchService = saveFiveTribesMatchService;
    }

    public async Task<FiveTribesMatch> Handle(SaveFiveTribesCommand request, CancellationToken cancellationToken)
    {
        return await _saveFiveTribesMatchService.Save(request.Model);
    }
}