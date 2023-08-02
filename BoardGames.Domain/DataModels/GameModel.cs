using BoardGames.Domain.Enums;

namespace BoardGames.Domain.DataModels;

public class GameModel
{
    public string Name { get; set; }
    
    public GameType GameType { get; set; }
}