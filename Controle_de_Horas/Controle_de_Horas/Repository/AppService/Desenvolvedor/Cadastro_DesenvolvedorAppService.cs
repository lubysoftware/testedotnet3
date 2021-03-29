using Controle_de_Horas.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Controle_de_Horas.Repository.AppService.Desenvolvedor
{
    public class Cadastro_DesenvolvedorAppService : ICadastro_Desenvolvedor
    {
        Conexao conexao = new Conexao();
        public void Cadastrar(Cadastro_Desenvolvedor paramInsert)
        {
            conexao.Cadastro_Desenvolvedor.Add(paramInsert);
            conexao.SaveChanges();            
        }

        public IReadOnlyList<Cadastro_Desenvolvedor> ListarDev()
        {
            return conexao.Cadastro_Desenvolvedor.AsNoTracking().ToList();            
        }

        public void ExcluirItem(Cadastro_Desenvolvedor item)
        {
            conexao.Entry(item).State = EntityState.Deleted;
            conexao.SaveChanges();
        }

        public void Editar(Cadastro_Desenvolvedor paramEdit)
        {
            conexao.Entry(paramEdit).State = EntityState.Modified;
            conexao.SaveChanges();
        }
    }
}