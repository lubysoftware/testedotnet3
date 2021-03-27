using Golnich_Horas.ViewModel;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace Golnich_Horas.Mapping
{
    public class PROJETOS_Mapping : EntityTypeConfiguration<PROJETOS>
    {
        public PROJETOS_Mapping()
        {
            this.ToTable("PROJETOS");
        }
    }
}