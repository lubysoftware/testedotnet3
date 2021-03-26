using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Projeto_Luby.ViewModel
{
    public class DESENVOLVEDORES
    {
        public int ID { get; set; }
        public string NOME { get; set; }
        public string LINGUAGEM { get; set; }
        public DateTime HORARIO { get; set; }
        public string COMPUTADOR { get; set; }
        public virtual string mensagemCallback { get; set; }
        public virtual bool isSuccess { get; set; }
    }
}