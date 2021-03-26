using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Projeto_Luby.ViewModel
{
    public class PROJETOS
    {
        public int ID { get; set; }
        public string NOME_PROJETO { get; set; }
        public string RESPONSAVEL { get; set; }
        public DateTime HORARIO { get; set; }
        public string COMPUTADOR { get; set; }
        public virtual string mensagemCallback { get; set; }
        public virtual bool isSuccess { get; set; }
    }
}