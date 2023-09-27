using BoardGames.Domain.DataModels;
using MediatR;

namespace BoardGames.Application.Handlers.Games.GetGames;

public record GetGamesQuery : IRequest<List<GameModel>>;