using BoardGames.Domain.Entities;

namespace BoardGames.Application.Interfaces;

public interface IGetGamesList
{
    Task<List<Game>> Get();
}