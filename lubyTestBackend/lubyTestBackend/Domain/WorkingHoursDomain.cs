using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lubyTestBackend.Domain
{
    public class WorkingHoursDomain
    {
        public int Id { get; set; }
        public string DateInit { get; set; }
        public string DateEnd { get; set; }
        public int IdDeveloper { get; set; }
    }
}
