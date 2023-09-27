using BoardGames.Domain.DataModels;
using MediatR;

namespace BoardGames.Application.Handlers.Games.GetGameMatchInfo;

public record GetGameMatchInfoCommand : IRequest<GameMatchInfoModel>;