using AutoMapper;
using BoardGames.Application.Common;
using BoardGames.Application.Interfaces.Repositories;
using BoardGames.Application.Interfaces.Services;
using BoardGames.Domain.DataModels;
using BoardGames.Domain.Entities;

namespace BoardGames.Application.Services;

public class PlayersService : IPlayersService
{
    private readonly IPlayerRepository _playerRepository;
    private readonly IMapper _mapper;

    public PlayersService(
        IPlayerRepository playerRepository,
        IMapper mapper)
    {
        _playerRepository = playerRepository;
        _mapper = mapper;
    }

    public async Task<Result> Create(PlayerCreateModel model)
    {
        var existingPlayers = await _playerRepository.Select();

        if (existingPlayers.Any(item => item.Name == model.NewPlayer))
        {
            return await ResultBuilder.BuildFailed($"Player with the name {model.NewPlayer} is already exists.");
        }

        var player = _mapper.Map<Player>(model);
        await _playerRepository.Add(player);
        
        return await ResultBuilder.BuildSucceed();
    }
    
    public async Task<List<PlayerModel>> Get()
    {
        var players = await _playerRepository.Select();
        
        return _mapper.Map<List<PlayerModel>>(players).OrderBy(player => player.Name).ToList();
    }
}