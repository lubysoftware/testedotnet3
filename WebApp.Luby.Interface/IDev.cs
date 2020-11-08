using System.Collections.Generic;
using System.Threading.Tasks;
using WebApp.Luby.Models;

namespace WebApp.Luby.Interface
{
    public interface IDev
    {
        Task<int> Store(ModelDev model);
        Task<bool> Save(ModelDev model, int Id);
        Task<IEnumerable<ModelDev>> GetAll();
        Task<ModelDev> Get(int Id);
        Task<bool> Delete(int Id);
    }
}