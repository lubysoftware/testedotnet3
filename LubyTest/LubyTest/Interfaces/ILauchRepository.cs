using LubyTest.Interfaces;
using LubyTest.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TesteLuby.Interfaces
{
    public interface ILauchRepository : IRepository<Lauch>
    {
        Task<IEnumerable<Lauch>> GetRankingOrderByHour();
        new Task<IEnumerable<Lauch>> GetAll();
    }
}
