using BoardGames.Application.Common;
using BoardGames.Application.Interfaces.Services.Players;
using MediatR;

namespace BoardGames.Application.Handlers.Players.CreateNewPlayer;

public class CreateNewPlayerCommandHandler : IRequestHandler<CreateNewPlayerCommand, Result>
{
    private readonly ICreatePlayerService _createPlayerService;

    public CreateNewPlayerCommandHandler(ICreatePlayerService createPlayerService)
    {
        _createPlayerService = createPlayerService;
    }

    public Task<Result> Handle(CreateNewPlayerCommand request, CancellationToken cancellationToken)
    {
        return _createPlayerService.Create(request.Model);
    }
}