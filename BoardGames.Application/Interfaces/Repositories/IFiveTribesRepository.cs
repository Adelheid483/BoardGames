using BoardGames.Domain.Entities;

namespace BoardGames.Application.Interfaces.Repositories;

public interface IFiveTribesRepository : IRepository<FiveTribesMatch>
{
    Task<FiveTribesMatch> Save(FiveTribesMatch match);

    Task<List<FiveTribesMatch>> Select();

    Task<List<FiveTribesMatch>> SelectById(Guid id);
}
