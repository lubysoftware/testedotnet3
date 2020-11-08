using System;
using System.ComponentModel.DataAnnotations;
using Dapper.Contrib.Extensions;

namespace WebApp.Luby.Models
{
    [Table("projects")]
    public class ModelProject
    {
        [ExplicitKey]
        public int project_id { get; set; }
        public DateTime project_created_at { get; set; }
        public DateTime? project_updated_at { get; set; }
        [Required(ErrorMessage = "O campo {0} e obrigatorio"), MaxLength(200, ErrorMessage = "O campo {0} pode ter no maximo {1} caracteres")]
        public string project_name { get; set; }        
        public string project_description { get; set; }
    }
}