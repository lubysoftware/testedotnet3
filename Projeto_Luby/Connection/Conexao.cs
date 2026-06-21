using Golnich_Horas.Mapping;
using Golnich_Horas.ViewModel;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.IO;
using System.Text;
using System.Configuration;

namespace Golnich_Horas
{
    public class Conexao : DbContext
    {
        //Realizando conexao com banco
        static Conexao()
        {
            Database.SetInitializer<Conexao>(null);
           
        }

        public Conexao() 
            : base("Conexao")
        {
            
        }
        //Criando referencias
        public DbSet<DESENVOLVEDORES> desenvolvedores { get; set; }
        public DbSet<PROJETOS> projetos { get; set; }
        public DbSet<LANCAMENTO_HORAS> lancamento { get; set; }

        //Mapeando Classes
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            modelBuilder.Configurations.Add(new DESENVOLVEDORES_Mapping());
            modelBuilder.Configurations.Add(new PROJETOS_Mapping());
            modelBuilder.Configurations.Add(new LANCAMENTO_HORAS_Mapping());

            //Ignorar Colunas       
            modelBuilder.Entity<DESENVOLVEDORES>().Ignore(l => l.mensagemCallback).Ignore(l => l.isSuccess);
            modelBuilder.Entity<PROJETOS>().Ignore(l => l.mensagemCallback).Ignore(l => l.isSuccess);
            modelBuilder.Entity<LANCAMENTO_HORAS>().Ignore(l => l.DATA_INICIAL).Ignore(l => l.DATA_FINAL)
              .Ignore(l => l.DS_PERIODO).Ignore(l => l.mensagemCallback)
              .Ignore(l => l.isSuccess);

        }

    }
}