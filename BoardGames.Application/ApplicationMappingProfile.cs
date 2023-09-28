using AutoMapper;
using BoardGames.Domain.DataModels;
using BoardGames.Domain.DataModels.GamesStore.Clank;
using BoardGames.Domain.DataModels.GamesStore.TyrantsOfTheUnderdark;
using BoardGames.Domain.Entities;

namespace BoardGames.Application;

public class ApplicationMappingProfile : Profile
{
    public ApplicationMappingProfile()
    {
        CreateMap<Game, GameModel>();
        CreateMap<Player, PlayerModel>();
        CreateMap<PlayerCreateModel, Player>().ForMember(d => d.Name, o => o.MapFrom(s => s.NewPlayer));
        
        // games store
        CreateMap<ClankSaveModel, ClankMatch>();
        CreateMap<TyrantsOfTheUnderdarkSaveModel, TyrantsOfTheUnderdarkMatch>();
    }
}