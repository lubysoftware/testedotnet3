using lubyTestBackend.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lubyTestBackend.Repository
{
    public interface IDeveloperRepository
    {
        public int Insert(DeveloperDomain developer);
        public IEnumerable<DeveloperDomain> GetAll();
        public int Update(DeveloperDomain developer);
        public int Delete(int id);
    }
}
