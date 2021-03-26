using Projeto_Luby.ViewModel;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace Projeto_Luby.Mapping
{
    public class LANCAMENTO_HORAS_Mapping : EntityTypeConfiguration<LANCAMENTO_HORAS>
    {
        public LANCAMENTO_HORAS_Mapping()
        {
            this.ToTable("LANCAMENTO_HORAS");
        }
    }
}