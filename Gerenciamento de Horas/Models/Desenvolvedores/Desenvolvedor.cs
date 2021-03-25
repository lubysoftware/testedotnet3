using Gerenciamento_de_Horas.Models.LancamentoHora;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gerenciamento_de_Horas.Models.Desenvolvedores
{
    public class Desenvolvedor
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public ICollection<Lancamentos> Lancamentos { get; set; }
    }
}
