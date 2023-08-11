using AutoMapper;
using BoardGames.Domain.DataModels;
using BoardGames.Domain.Entities;

namespace BoardGames.Application;

public class ApplicationMappingProfile : Profile
{
    public ApplicationMappingProfile()
    {
        CreateMap<Game, GameModel>();
        CreateMap<PlayerCreateModel, Player>()
            .ForMember(d => d.Name, o => o.MapFrom(s => s.NewPlayer));
    }
}