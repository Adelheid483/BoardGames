using BoardGames.Domain.Entities;

namespace BoardGames.Application.Interfaces.Repositories;

public interface IClankRepository : IRepository<ClankMatch>
{
    Task<ClankMatch> Save(ClankMatch match);

    Task<List<ClankMatch>> Select();

    Task<List<ClankMatch>> SelectById(Guid id);
}
