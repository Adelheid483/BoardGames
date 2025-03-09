using AutoMapper;
using BoardGames.Application.Interfaces.Repositories;
using BoardGames.Application.Interfaces.Services.GamesStore.FiveTribes;
using BoardGames.Domain.DataModels.GamesStore.FiveTribes;
using BoardGames.Domain.Entities;

namespace BoardGames.Application.Services.GamesStore.FiveTribes;

public class SaveFiveTribesMatchService : ISaveFiveTribesMatchService
{
    private readonly IFiveTribesRepository _fiveTribesRepository;
    private readonly IMapper _mapper;

    public SaveFiveTribesMatchService(
        IMapper mapper,
        IFiveTribesRepository fiveTribesRepository)
    {
        _mapper = mapper;
        _fiveTribesRepository = fiveTribesRepository;
    }

    public async Task<FiveTribesMatch> Save(FiveTribesSaveModel model)
    {
        var match = _mapper.Map<FiveTribesMatch>(model);

        return await _fiveTribesRepository.Save(match);
    }
}