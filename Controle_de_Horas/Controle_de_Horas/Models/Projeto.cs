using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Controle_de_Horas.Models
{
    public class Projeto
    {
        public int IdProjeto { get; set; }
        public string Descricao { get; set; }
        public DateTime Data_Inicio { get; set; }
        public DateTime Data_Fim { get; set; }
        public virtual string dtInicioTela { get; set; }
        public virtual string dtFimTela { get; set; }
    }
}