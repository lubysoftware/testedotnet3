using System;
using Dapper.Contrib.Extensions;

namespace WebApp.Luby.Models
{
    [Table("user_dots")]
    public class ModelDot
    {
        [ExplicitKey]
        public int user_dot_id { get; set; }
        public DateTime user_dot_created_at { get; set; }
        public DateTime user_dot_date_entry { get; set; }
        public DateTime? user_dot_date_break_start { get; set; }
        public DateTime? user_dot_date_break_end { get; set; }
        public DateTime user_dot_date_exit { get; set; }
        public int id { get; set; }
    }

    [Table("dot_types")]
    public class ModelDotType
    {
        [ExplicitKey]
        public short dot_type_id { get; set; }
        public string dot_type_desc { get; set; }
        public bool dot_type_status { get; set; }
        public DateTime dot_type_created_at { get; set; }
        public DateTime? dot_type_updated_at { get; set; }
    }
    
    [Table("user_dot_logs")]
    public class ModelDotLog
    {
        [ExplicitKey]
        public int user_dot_log_id { get; set; }
        public int user_dot_id { get; set; }
        public DateTime user_dot_log_created_at { get; set; }
        public DateTime? user_dot_log_updated_at { get; set; }
        public string user_dot_log_description { get; set; }
        public int id { get; set; }
    }
}
