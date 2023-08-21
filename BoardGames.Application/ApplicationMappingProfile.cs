using AutoMapper;
using BoardGames.Domain.DataModels;
using BoardGames.Domain.Entities;

namespace BoardGames.Application;

public class ApplicationMappingProfile : Profile
{
    public ApplicationMappingProfile()
    {
        CreateMap<Game, GameModel>();
        CreateMap<Player, PlayerModel>();
        CreateMap<PlayerCreateModel, Player>()
            .ForMember(d => d.Name, o => o.MapFrom(s => s.NewPlayer));
        CreateMap<TyrantsOfTheUnderdarkSaveModel, TyrantsOfTheUnderdarkMatch>()
            .ForMember(d => d.GameId, o => o.MapFrom(s => s.MatchId));
    }
}