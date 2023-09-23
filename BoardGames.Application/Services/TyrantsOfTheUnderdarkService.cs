using AutoMapper;
using BoardGames.Application.Interfaces.Repositories;
using BoardGames.Application.Interfaces.Services;
using BoardGames.Domain.DataModels;
using BoardGames.Domain.Entities;

namespace BoardGames.Application.Services;

public class TyrantsOfTheUnderdarkService : ITyrantsOfTheUnderdarkService
{
    private readonly ITyrantsOfTheUnderdarkRepository _tyrantsOfTheUnderdarkRepository;
    private readonly IMapper _mapper;

    public TyrantsOfTheUnderdarkService(
        ITyrantsOfTheUnderdarkRepository tyrantsOfTheUnderdarkRepository,
        IMapper mapper)
    {
        _tyrantsOfTheUnderdarkRepository = tyrantsOfTheUnderdarkRepository;
        _mapper = mapper;
    }

    public async Task<TyrantsOfTheUnderdarkMatch> Save(TyrantsOfTheUnderdarkSaveModel model)
    {
        var match = _mapper.Map<TyrantsOfTheUnderdarkMatch>(model);

        return await _tyrantsOfTheUnderdarkRepository.Save(match);
    }
}