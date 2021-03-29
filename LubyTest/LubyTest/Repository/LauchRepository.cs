using LubyTest.Data;
using LubyTest.Models;
using LubyTest.Repository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TesteLuby.Interfaces;

namespace TesteLuby.Repository
{
    public class LauchRepository : Repository<Lauch>, ILauchRepository
    {
        public LauchRepository(TesteDbContext context) : base(context) { }

        public async Task<IEnumerable<Lauch>> GetRankingOrderByHour()
        {
            
            return (await GetAll()).OrderByDescending(lauch => lauch.Hours);
               
        }

        public async Task<IEnumerable<Lauch>> GetAll()
        {
            return (await dbSet.Include("Developer").Include("Project").OrderByDescending(lauch=>lauch.Hours).ToListAsync());
        }
    }
}
