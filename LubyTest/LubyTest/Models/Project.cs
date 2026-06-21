using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LubyTest.Models
{
    public class Project : Entity
    {
        [DisplayName("Nome")]
        [Required(ErrorMessage = "Preencha o Campo {0}")]
        [StringLength(80, ErrorMessage = "O campo {0} deve conter entre{2} e {1} caracteres ", MinimumLength = 2)]
        public string Name { get; set; }

        [DisplayName("Descrição")]
        [Required(ErrorMessage = "Preencha o Campo {0}")]
        [StringLength(250, ErrorMessage = "O campo {0} deve conter entre{2} e {1} caracteres ", MinimumLength = 2)]
        public string Description { get; set; }

        public IEnumerable<Lauch> Lauches { get; set; }
    }
}
