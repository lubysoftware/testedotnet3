using LubyTest.Data;
using LubyTest.Models;
using LubyTest.Repository;
using TesteLuby.Interfaces;

namespace TesteLuby.Repository
{
    public class ProjectsRepository : Repository<Project>, IProjectRepository
    {
        public ProjectsRepository(TesteDbContext context) : base(context) { }
    }
}
