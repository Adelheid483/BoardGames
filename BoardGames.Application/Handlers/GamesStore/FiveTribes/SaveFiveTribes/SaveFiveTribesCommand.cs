using BoardGames.Domain.DataModels.GamesStore.FiveTribes;
using BoardGames.Domain.Entities;
using MediatR;

namespace BoardGames.Application.Handlers.GamesStore.FiveTribes.SaveFiveTribes;

public record SaveFiveTribesCommand(FiveTribesSaveModel Model) : IRequest<FiveTribesMatch>;