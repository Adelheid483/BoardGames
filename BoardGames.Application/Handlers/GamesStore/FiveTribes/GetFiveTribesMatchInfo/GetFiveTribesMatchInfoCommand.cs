using BoardGames.Domain.DataModels.GamesStore.FiveTribes;
using MediatR;

namespace BoardGames.Application.Handlers.GamesStore.FiveTribes.GetFiveTribesMatchInfo;

public record GetFiveTribesMatchInfoCommand : IRequest<FiveTribesMatchInfoModel>;