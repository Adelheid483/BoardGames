using BoardGames.Domain.DataModels.GamesStore.Clank;
using BoardGames.Domain.Entities;
using MediatR;

namespace BoardGames.Application.Handlers.GamesStore.Clank.SaveClank;

public record SaveClankCommand(ClankSaveModel Model) : IRequest<ClankMatch>;