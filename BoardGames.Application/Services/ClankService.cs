using AutoMapper;
using BoardGames.Application.Interfaces.Repositories;
using BoardGames.Application.Interfaces.Services;
using BoardGames.Domain.DataModels;
using BoardGames.Domain.Entities;

namespace BoardGames.Application.Services;

public class ClankService : IClankService
{
    private readonly IClankRepository _clankRepository;
    private readonly IMapper _mapper;

    public ClankService(
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