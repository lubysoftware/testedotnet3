using Controle_de_Horas.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Controle_de_Horas.Repository
{
    public class ProjetoAppService : IProjeto
    {
        Conexao conexao = new Conexao();

        public void Cadastrar(Projeto paramInsert)
        {
            conexao.Projeto.Add(paramInsert);
            conexao.SaveChanges();
        }

        public void ExcluirProjeto(Projeto CodigoId)
        {
            conexao.Entry(CodigoId).State = EntityState.Deleted;
            conexao.SaveChanges();
        }

        public IReadOnlyList<Projeto> ListarProjeto()
        {
            return conexao.Projeto.AsNoTracking().ToList();
        }
    }
}