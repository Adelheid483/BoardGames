using AutoMapper;
using BoardGames.Application.Interfaces;
using BoardGames.Application.Interfaces.Repositories;
using BoardGames.Domain.DataModels;

namespace BoardGames.Application.Services;

public class GetGamesList : IGetGamesList
{
    private readonly IGameRepository _gameRepository;
    private readonly IMapper _mapper;

    public GetGamesList(
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