using Golnich_Horas.ViewModel;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace Golnich_Horas.Mapping
{
    public class LANCAMENTO_HORAS_Mapping : EntityTypeConfiguration<LANCAMENTO_HORAS>
    {
        public LANCAMENTO_HORAS_Mapping()
        {
            this.ToTable("LANCAMENTO_HORAS");
        }
    }
}