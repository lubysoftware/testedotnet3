using Golnich_Horas.ViewModel;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace Golnich_Horas.Mapping
{
    public class DESENVOLVEDORES_Mapping : EntityTypeConfiguration<DESENVOLVEDORES>
    {
        public DESENVOLVEDORES_Mapping()
        {
            this.ToTable("DESENVOLVEDORES");
           
        }
    }
}