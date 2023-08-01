namespace BoardGames.Application.Interfaces.Repositories;

public interface IRepository<T>
{
    Task<List<T>> Select();
}