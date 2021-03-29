using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Controle_de_Horas.Models
{
    public class Lancamento_De_Horas
    {
        public int Id { get; set; }
        public string DescriProjeto { get; set; }
        public string NomeDev { get; set; }
        public TimeSpan Horas_trabalhadas { get; set; }
        public DateTime DataInicio { get; set; }
        public DateTime DataFim { get; set; }
    }
}