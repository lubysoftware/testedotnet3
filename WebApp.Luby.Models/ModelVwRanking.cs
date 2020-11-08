using Dapper.Contrib.Extensions;

namespace WebApp.Luby.Models
{
    [Table("vw_ranking")]
    public class ModelVwRanking
    {
        public int id { get; set; } 
        public string name { get; set; } 
        public string email { get; set; } 
        public string project { get; set; } 
        public string hours { get; set; } 
        public string media { get; set; } 
    }
}