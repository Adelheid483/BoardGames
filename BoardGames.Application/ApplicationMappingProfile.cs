using AutoMapper;
using BoardGames.Domain.DataModels;
using BoardGames.Domain.Entities;

namespace BoardGames.Application;

public class ApplicationMappingProfile : Profile
{
    public ApplicationMappingProfile()
    {
        CreateMap<Game, GameModel>();
    }
}