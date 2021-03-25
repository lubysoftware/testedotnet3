using Controle_de_Horas.Models;
using Controle_de_Horas.Repository.Mapping;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace Controle_de_Horas
{
    public class Conexao : DbContext
    {
        public Conexao() : base("Conexao")
        {
        }

        public DbSet<Cadastro_Desenvolvedor> Cadastro_Desenvolvedor { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            modelBuilder.Configurations.Add(new CADASTRO_DESENVOLVEDOR_MAPPING());
        }
    }
}