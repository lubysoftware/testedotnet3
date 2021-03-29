using Controle_de_Horas.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace Controle_de_Horas.Repository.Mapping
{
    public class LançamentoDeHoraMAPPING: EntityTypeConfiguration<Lancamento_De_Horas>
    {
        public LançamentoDeHoraMAPPING()
        {
            this.ToTable("LANCAMENTO_DE_HORA");
            this.HasKey(k => k.Id);

        }
    }
}