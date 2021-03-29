using Controle_de_Horas.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace Controle_de_Horas.Repository.Mapping
{
    public class CADASTRO_DESENVOLVEDOR_MAPPING : EntityTypeConfiguration<Cadastro_Desenvolvedor>
    {
        public CADASTRO_DESENVOLVEDOR_MAPPING()
        {
            this.ToTable("CADASTRO_DESENVOLVEDOR");
            this.HasKey(k => k.Id);

        }
    }
}