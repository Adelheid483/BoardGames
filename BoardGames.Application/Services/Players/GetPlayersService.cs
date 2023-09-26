using AutoMapper;
using BoardGames.Application.Interfaces.Repositories;
using BoardGames.Application.Interfaces.Services.Players;
using BoardGames.Domain.DataModels;

namespace BoardGames.Application.Services.Players;

public class GetPlayersService : IGetPlayersService
{
    private readonly IPlayerRepository _playerRepository;
    private readonly IMapper _mapper;

    public GetPlayersService(
        IPlayerRepository playerRepository,
        IMapper mapper)
    {
        _playerRepository = playerRepository;
        _mapper = mapper;
    }
    
    public async Task<List<PlayerModel>> Get()
    {
        var players = await _playerRepository.Select();
        
        return _mapper.Map<List<PlayerModel>>(players).OrderBy(player => player.Name).ToList();
    }
}