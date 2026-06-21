using Gerenciamento_de_Horas.Models.Desenvolvedores;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gerenciamento_de_Horas.Models.LancamentoHora
{
    public class Context: DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options)
        {

        }

        public DbSet<Desenvolvedor> Desenvolvedores { get; set; }
        public DbSet<Lancamentos> Lancamentos { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Lancamentos>().HasOne(a => a.Desenvolvedor).WithMany(a => a.Lancamentos).HasForeignKey(a => a.DesenvolvedorId);
        
        }
    }


}
