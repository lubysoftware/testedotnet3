using LubyTest.Data;
using LubyTest.Models;
using LubyTest.Repository;
using TesteLuby.Interfaces;

namespace TesteLuby.Repository
{
    public class DeveloperRepository : Repository<Developer>, IDeveloperRepository
    {
        public DeveloperRepository(TesteDbContext context) : base(context) { }
    }
}
