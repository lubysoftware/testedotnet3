using lubyTestBackend.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lubyTestBackend.Repository
{
    public interface IProjectRepository
    {
        public int Insert(ProjectDomain project);
        public IEnumerable<ProjectDomain> GetAll();
        public ProjectDomain GetById(int id);
        public int Update(ProjectDomain project);
        public int Delete(int id);
    }
}
