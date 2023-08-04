using BoardGames.Domain.DataModels;

namespace BoardGames.Application.Interfaces;

public interface ICounter
{
    Task<int> Sum(TotalCountModel model);
}