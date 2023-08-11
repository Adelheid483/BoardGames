using AutoMapper;
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

    public async Task<Player> Create(PlayerCreateModel model)
    {
        var player = _mapper.Map<Player>(model);
        
        return await _playerRepository.Add(player);
    }
}