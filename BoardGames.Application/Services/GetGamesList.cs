using BoardGames.Application.Interfaces;
using BoardGames.Application.Interfaces.Repositories;
using BoardGames.Domain.Entities;

namespace BoardGames.Application.Services;

public class GetGamesList : IGetGamesList
{
    private readonly IGameRepository _gameRepository;

    public GetGamesList(IGameRepository gameRepository)
    {
        _gameRepository = gameRepository;
    }

    public async Task<List<Game>> Get()
    {
        return await _gameRepository.Select();
    }
}