using AutoMapper;
using BoardGames.Application.Interfaces.Repositories;
using BoardGames.Application.Interfaces.Services;
using BoardGames.Domain.DataModels;

namespace BoardGames.Application.Services;

public class GamesService : IGamesService
{
    private readonly IGameRepository _gameRepository;
    private readonly IMapper _mapper;

    public GamesService(
        IGameRepository gameRepository,
        IMapper mapper)
    {
        _gameRepository = gameRepository;
        _mapper = mapper;
    }

    public async Task<List<GameModel>> Get()
    {
        var games = await _gameRepository.Select();
        
        return _mapper.Map<List<GameModel>>(games);
    }
}