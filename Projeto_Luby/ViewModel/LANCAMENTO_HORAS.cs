using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Golnich_Horas.ViewModel
{
    public class LANCAMENTO_HORAS
    {
        public int ID { get; set; }
        public string NOME { get; set; }  
        public DateTime HORARIO { get; set; }
        public DateTime PERIODO { get; set; }
        public string COMPUTADOR { get; set; }
        public TimeSpan HORAS { get; set; }
        public virtual string DATA_INICIAL { get; set; }
        public virtual string DATA_FINAL { get; set; }
        public virtual string DS_PERIODO { get; set; }
        public virtual string mensagemCallback { get; set; }
        public virtual bool isSuccess { get; set; }

    }
}