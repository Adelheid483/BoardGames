using BoardGames.Domain.DataModels;
using BoardGames.Domain.Entities;
using MediatR;

namespace BoardGames.Application.Handlers.GamesStore.TyrantsOfTheUnderdark.SaveTyrantsOfTheUnderdark;

public record SaveTyrantsOfTheUnderdarkCommand(TyrantsOfTheUnderdarkSaveModel Model)
    : IRequest<TyrantsOfTheUnderdarkMatch>;