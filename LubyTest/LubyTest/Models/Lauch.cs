using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LubyTest.Models
{
    public class Lauch : Entity
    {
        [DisplayName("Desenvolvedor")]
        [Required(ErrorMessage = "Preencha o Campo {0}")] 
        public Guid DeveloperId { get; set; }

        [DisplayName("Projeto")]
        [Required(ErrorMessage = "Preencha o Campo {0}")]
        public Guid ProjectId { get; set; }

        [DisplayName("Data Inicial")]
        [DataType(DataType.Date), DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}", ApplyFormatInEditMode = true)]
        [Required(ErrorMessage = "Preencha o Campo {0}")]
        public DateTime StarDate { get; set; }

        [DisplayName("Data Final")]
        [DataType(DataType.Date), DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}", ApplyFormatInEditMode = true)]
        [Required(ErrorMessage = "Preencha o Campo {0}")]
        public DateTime EndDate { get; set; }

        [DisplayName("Horas Lançadas")]
        [Column(TypeName = "decimal(18,2)")]
        [Required(ErrorMessage = "Preencha o Campo {0}")]
        public decimal Hours { get; set; }

        public Developer Developer { get; set; }
        public Project Project { get; set; }
    }
}
