using System.Collections.Generic;
using System.Threading.Tasks;
using WebApp.Luby.Models;

namespace WebApp.Luby.Interface
{
    public interface IProject
    {
        Task<int> Store(ModelProject model);
        Task<bool> Save(ModelProject model, int Id);
        Task<IEnumerable<ModelProject>> GetAll();
        Task<ModelProject> Get(int Id);
        Task<bool> Delete(int Id);
    }
}