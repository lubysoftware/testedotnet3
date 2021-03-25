using Gerenciamento_de_Horas.Models.Desenvolvedores;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gerenciamento_de_Horas.Models.LancamentoHora
{
    public class Lancamentos
    {
        public int Id { get; set; }
        public Desenvolvedor Desenvolvedor { get; set; }
        public int DesenvolvedorId { get; set; }
        public DateTime DataInicio{ get; set; }
        public DateTime DataFim { get; set; }
    }
}
