using AutoMapper;
using BoardGames.Application.Common;
using BoardGames.Application.Interfaces.Repositories;
using BoardGames.Application.Interfaces.Services.Players;
using BoardGames.Domain.DataModels;
using BoardGames.Domain.Entities;

namespace BoardGames.Application.Services.Players;

public class CreatePlayerService : ICreatePlayerService
{
    private readonly IPlayerRepository _playerRepository;
    private readonly IMapper _mapper;

    public CreatePlayerService(
        IPlayerRepository playerRepository,
        IMapper mapper)
    {
        _playerRepository = playerRepository;
        _mapper = mapper;
    }

    public async Task<Result> Create(PlayerCreateModel model)
    {
        var existingPlayers = await _playerRepository.Select();
        var hasDuplication = existingPlayers.Any(item =>
            string.Equals(item.Name, model.NewPlayer, StringComparison.InvariantCultureIgnoreCase));

        if (hasDuplication)
        {
            return await ResultBuilder.BuildFailed($"Player with the name {model.NewPlayer} is already exists");
        }

        var player = _mapper.Map<Player>(model);
        await _playerRepository.Add(player);
        
        return await ResultBuilder.BuildSucceed();
    }
}