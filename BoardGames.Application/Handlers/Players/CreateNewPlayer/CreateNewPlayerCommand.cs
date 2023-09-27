using BoardGames.Application.Common;
using BoardGames.Domain.DataModels;
using MediatR;

namespace BoardGames.Application.Handlers.Players.CreateNewPlayer;

public record CreateNewPlayerCommand(PlayerCreateModel Model) : IRequest<Result>;