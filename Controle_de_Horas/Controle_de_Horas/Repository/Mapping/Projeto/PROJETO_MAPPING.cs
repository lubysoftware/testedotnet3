using Controle_de_Horas.Models;
using System.Data.Entity.ModelConfiguration;


namespace Controle_de_Horas.Repository.Mapping
{
    public class PROJETO_MAPPING : EntityTypeConfiguration<Projeto>
    {
        public PROJETO_MAPPING()
        {
            this.ToTable("PROJETO");
            this.HasKey(k => k.IdProjeto);
        }
    }
}