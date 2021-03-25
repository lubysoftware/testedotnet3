using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Controle_de_Horas.Models
{
    public class LancamentoDeHoras
    {
        public int Id { get; set; }
        public string NomeDev { get; set; }
        public string Horastrabalhadas { get; set; }
        public string DataInicio { get; set; }
        public string DataFim { get; set; }
    }
}