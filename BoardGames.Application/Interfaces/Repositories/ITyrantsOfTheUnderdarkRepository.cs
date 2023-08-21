using BoardGames.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BoardGames.Application.Interfaces.Repositories;

public interface ITyrantsOfTheUnderdarkRepository : IRepository<TyrantsOfTheUnderdarkMatch>
{
    Task<TyrantsOfTheUnderdarkMatch> Save(TyrantsOfTheUnderdarkMatch match);
}
