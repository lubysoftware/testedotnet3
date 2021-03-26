using Projeto_Luby.AppServices.Interfaces;
using Projeto_Luby.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Projeto_Luby.AppServices
{
    public class Metodos_ProjetosAppService : IMetodos_ProjetosAppService
    {
        Conexao con = new Conexao();

        //Metodo de Cadastrar 
        public void CadastrarProjeto(PROJETOS dadosTela)
        {
            con.projetos.Add(dadosTela);
            con.SaveChanges();
        }
        //Metodo de Atualizar 
        public void AtualizaProjeto(PROJETOS dadosTela)
        {
            con.Entry(dadosTela).State = System.Data.Entity.EntityState.Modified;
            con.SaveChanges();
        }
        //Metodo de Deletar 
        public void DeletarProjeto(PROJETOS dadosTela)
        {
            var entidade = con.projetos.FirstOrDefault(l => l.ID == dadosTela.ID);
            con.projetos.Remove(entidade);
            con.SaveChanges();
        }
        //Metodo de Pesquisar 
        public IReadOnlyList<PROJETOS> ListaProjeto()
        {
            return con.projetos.AsNoTracking().ToList();
        }
    }
}