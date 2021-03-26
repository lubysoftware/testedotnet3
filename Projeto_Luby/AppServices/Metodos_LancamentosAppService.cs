using Projeto_Luby.AppServices.Interfaces;
using Projeto_Luby.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Projeto_Luby.AppServices
{
    public class Metodos_LancamentosAppService : IMetodos_LancamentosAppService
    {
        Conexao con = new Conexao();

        //Metodo de Cadastrar
        public void CadastrarLancamento(LANCAMENTO_HORAS dadosTela)
        {
            con.lancamento.Add(dadosTela);
            con.SaveChanges();
        }
        //Metodo de Atualizar 
        public void AtualizaLancamento(LANCAMENTO_HORAS dadosTela)
        {
            con.Entry(dadosTela).State = System.Data.Entity.EntityState.Modified;
            con.SaveChanges();
        }
        //Metodo de Deletar 
        public void DeletarLancamento(LANCAMENTO_HORAS dadosTela)
        {
            var entidade = con.lancamento.FirstOrDefault(l => l.ID == dadosTela.ID);
            con.lancamento.Remove(entidade);
            con.SaveChanges();
        }
        //Metodo de Pesquisar 
        public IReadOnlyList<LANCAMENTO_HORAS> ListaLancamentos()
        {
            return con.lancamento.AsNoTracking().ToList();
        }
    }
}