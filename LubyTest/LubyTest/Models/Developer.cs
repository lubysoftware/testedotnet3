using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LubyTest.Models
{
    public class Developer : Entity
    {

        [DisplayName("Nome")]
        [Required(ErrorMessage = "Preencha o Campo {0}")]
        [StringLength(80, ErrorMessage ="O campo {0} deve conter entre{2} e {1} caracteres ", MinimumLength =2)]
        public string Name { get; set; }
        [DisplayName("Idade")]
        [Required(ErrorMessage = "Preencha o Campo {0}")]
        public int Age { get; set; }
        [DisplayName("E-mail")]
        [Required(ErrorMessage = "Preencha o Campo {0}")]
        public string Email { get; set; }

        public IEnumerable<Lauch> Lauches { get; set; }
    }
}
