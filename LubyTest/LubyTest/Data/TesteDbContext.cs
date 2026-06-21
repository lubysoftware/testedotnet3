using LubyTest.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LubyTest.Data
{
    public class TesteDbContext : DbContext
    {
        public TesteDbContext(DbContextOptions options) : base(options) { }

        public DbSet<Developer> Developers { get; set; }
        public DbSet<Lauch> Lauches { get; set; }
        public DbSet<Project> Projects { get; set; }

 
    }
}
