using Projeto_Luby.ViewModel;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace Projeto_Luby.Mapping
{
    public class DESENVOLVEDORES_Mapping : EntityTypeConfiguration<DESENVOLVEDORES>
    {
        public DESENVOLVEDORES_Mapping()
        {
            this.ToTable("DESENVOLVEDORES");
           
        }
    }
}