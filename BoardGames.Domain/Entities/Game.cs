using BoardGames.Domain.Enums;

namespace BoardGames.Domain.Entities;

public class Game : Entity
{
    public string Name { get; set; }
    
    public GameType GameType { get; set; }
}