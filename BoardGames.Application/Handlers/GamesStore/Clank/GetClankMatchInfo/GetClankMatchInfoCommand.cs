using BoardGames.Domain.DataModels.GamesStore.Clank;
using MediatR;

namespace BoardGames.Application.Handlers.GamesStore.Clank.GetClankMatchInfo;

public record GetClankMatchInfoCommand : IRequest<ClankMatchInfoModel>;