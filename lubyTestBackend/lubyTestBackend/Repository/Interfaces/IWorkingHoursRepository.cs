using lubyTestBackend.Domain;
using lubyTestBackend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lubyTestBackend.Repository.Interfaces
{
    public interface IWorkingHoursRepository
    {
        public int Insert(WorkingHoursDomain workingHours);
        public IEnumerable<WorkingHoursDomain> GetAll();
        public WorkingHoursDomain GetById(int id);
        public int Update(WorkingHoursDomain workingHours);
        public IEnumerable<WeekRankModel> GetRank();
    }
}
