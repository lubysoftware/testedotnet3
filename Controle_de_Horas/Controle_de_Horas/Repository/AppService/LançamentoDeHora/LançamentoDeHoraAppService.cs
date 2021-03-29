using Controle_de_Horas.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Controle_de_Horas.Repository.AppService.LançamentoDeHora
{
    public class LançamentoDeHoraAppService : ILançamentoDeHora
    {
        Conexao conexao = new Conexao();

        public void Cadastrar(Lancamento_De_Horas paramInsert)
        {
            conexao.Lancamento_De_Horas.Add(paramInsert);
            conexao.SaveChanges();
        }

        public IReadOnlyList<Lancamento_De_Horas> ListarLancamento()
        {
            return conexao.Lancamento_De_Horas.AsNoTracking().ToList();
        }
    }
}