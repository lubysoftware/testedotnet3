using Projeto_Luby.ViewModel;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace Projeto_Luby.Mapping
{
    public class PROJETOS_Mapping : EntityTypeConfiguration<PROJETOS>
    {
        public PROJETOS_Mapping()
        {
            this.ToTable("PROJETOS");
        }
    }
}