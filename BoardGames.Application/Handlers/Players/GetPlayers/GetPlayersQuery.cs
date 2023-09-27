using BoardGames.Domain.DataModels;
using MediatR;

namespace BoardGames.Application.Handlers.Players.GetPlayers;

public record GetPlayersQuery : IRequest<List<PlayerModel>>;