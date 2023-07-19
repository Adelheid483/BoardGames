using BoardGames.Application.Interfaces;
using BoardGames.Domain.DataModels;

namespace BoardGames.Application.Services;

public class GetGamesList : IGetGamesList
{
    public List<GameModel> Get()
    {
        return new List<GameModel>
        {
            new()
            {
                Name = "Ticket to Ride",
                Id = Guid.NewGuid()
            },
            new()
            {
                Name = "Res Arcana",
                Id = Guid.NewGuid()
            },
            new()
            {
                Name = "Tyrants of the Underdark",
                Id = Guid.NewGuid()
            },
            new()
            {
                Name = "Brass",
                Id = Guid.NewGuid()
            },
        };
    }
}