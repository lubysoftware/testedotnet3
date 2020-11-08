using System.Collections.Generic;
using System.Threading.Tasks;
using WebApp.Luby.Models;

namespace WebApp.Luby.Interface
{
    public interface IDot
    {
        Task<int> Store(ModelDot model);
        Task<bool> Save(ModelDot model, int Id);
        Task<IEnumerable<ModelDot>> GetAll();
        Task<ModelDot> Get(int Id);
        Task<bool> Delete(int Id);
        Task<IEnumerable<ModelDot>> GetAllByIdDev(int Id);
        Task<IEnumerable<ModelVwRanking>> GetAllRanking();
    }
}