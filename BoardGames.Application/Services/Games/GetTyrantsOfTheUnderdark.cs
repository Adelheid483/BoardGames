using BoardGames.Application.Interfaces.Games;

namespace BoardGames.Application.Services.Games;

public class GetTyrantsOfTheUnderdark : IGetTyrantsOfTheUnderdark
{
    public List<string> Get()
    {
        return new List<string>
        {
            "Control Sites",
            "Total Control Sites",
            "Trophy Hall",
            "Deck",
            "Inner Circle Deck",
            "Tokens",
        };
    }
}