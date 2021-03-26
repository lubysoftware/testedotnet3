using Controle_de_Horas.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Controle_de_Horas.Repository.AppService.LançamentoDeHora
{
    interface ILançamentoDeHora
    {
        void Cadastrar(Lancamento_De_Horas paramInsert);
        IReadOnlyList<Lancamento_De_Horas> ListarLancamento();
    }
}
