using AutoMapper;
using BoardGames.Application.Interfaces.Repositories;
using BoardGames.Application.Interfaces.Services.GamesStore.Clank;
using BoardGames.Domain.DataModels.GamesStore.Clank;
using BoardGames.Domain.Entities;

namespace BoardGames.Application.Services.GamesStore.Clank;

public class SaveClankMatchService : ISaveClankMatchService
{
    private readonly IClankRepository _clankRepository;
    private readonly IMapper _mapper;

    public SaveClankMatchService(
        IMapper mapper,
        IClankRepository clankRepository)
    {
        _mapper = mapper;
        _clankRepository = clankRepository;
    }

    public async Task<ClankMatch> Save(ClankSaveModel model)
    {
        var match = _mapper.Map<ClankMatch>(model);

        return await _clankRepository.Save(match);
    }
}