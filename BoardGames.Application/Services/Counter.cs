using BoardGames.Application.Interfaces;
using BoardGames.Domain.DataModels;

namespace BoardGames.Application.Services;

public class Counter : ICounter
{
    public Task<int> Sum(TotalCountModel model)
    {
        return Task.FromResult(model.Values.Sum());
    }
}