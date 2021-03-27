using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Gerenciamento_de_Horas.Models
{
    public class Ranking
    {
        public string Desenvolvedor { get; set; }

        [Display(Name = "Total de Horas Trabalhadas")]
        public double Horas { get; set; }
    }
}
