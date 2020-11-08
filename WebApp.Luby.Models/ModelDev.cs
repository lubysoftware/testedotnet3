using System;
using Dapper.Contrib.Extensions;

namespace WebApp.Luby.Models
{
    [Table("devs")]
    public class ModelDev
    {
        [ExplicitKey]
        public int id { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public DateTime created_at { get; set; }
        public DateTime? updated_at { get; set; }
        public bool status { get; set; }
    }
    
}
