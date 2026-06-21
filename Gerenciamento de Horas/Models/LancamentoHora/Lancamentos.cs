using Gerenciamento_de_Horas.Models.Desenvolvedores;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Gerenciamento_de_Horas.Models.LancamentoHora
{
    public class Lancamentos
    {
        public int Id { get; set; }
        public Desenvolvedor Desenvolvedor { get; set; }
        [Display(Name = "Desenvolvedor")]
        public int DesenvolvedorId { get; set; }
        [Display(Name = "Entrada")]
        public DateTime DataInicio{ get; set; }
        [Display(Name = "Saída")]
        public DateTime DataFim { get; set; }
        public double TotalHoras { get; set; }
    }
}
