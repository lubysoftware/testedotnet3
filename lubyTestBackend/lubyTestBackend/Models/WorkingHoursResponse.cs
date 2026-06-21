using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lubyTestBackend.Models
{
    public class WorkingHoursResponse
    {
        public int Id { get; set; }
        public string DateInit { get; set; }
        public string DateEnd { get; set; }
        public string DevName { get; set; }
    }
}
