namespace BoardGames.Application.Interfaces;

public interface IRepository<T>
{
    Task<T> GetById(Guid id);
    
    Task<T> Add(T entity);

    Task<List<T>> Select();
}