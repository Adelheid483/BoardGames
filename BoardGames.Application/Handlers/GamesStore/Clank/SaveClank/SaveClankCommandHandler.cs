using BoardGames.Application.Interfaces.Services.GamesStore.Clank;
using BoardGames.Domain.Entities;
using MediatR;

namespace BoardGames.Application.Handlers.GamesStore.Clank.SaveClank;

public class SaveClankCommandHandler : IRequestHandler<SaveClankCommand, ClankMatch>
{
    private readonly ISaveClankMatchService _saveClankMatchService;

    public SaveClankCommandHandler(ISaveClankMatchService saveClankMatchService)
    {
        _saveClankMatchService = saveClankMatchService;
    }

    public async Task<ClankMatch> Handle(SaveClankCommand request, CancellationToken cancellationToken)
    {
        return await _saveClankMatchService.Save(request.Model);
    }
}