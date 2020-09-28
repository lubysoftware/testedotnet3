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
        public IEnumerable<WorkingHoursResponse> GetAll();
        public IEnumerable<WeekRankModel> GetRank();
    }
}
