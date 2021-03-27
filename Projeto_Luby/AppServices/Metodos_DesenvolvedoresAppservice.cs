using Golnich_Horas.AppServices;
using Golnich_Horas.ViewModel;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace Golnich_Horas.AppServices
{
    public class Metodos_DesenvolvedoresAppService : IMetodos_DesenvolvedoresAppService
    {
        Conexao con = new Conexao();

        //Metodo de Cadastrar
        public void CadastrarDesenvolvedor(DESENVOLVEDORES dadosTela)
        {         
                con.desenvolvedores.Add(dadosTela);
                con.SaveChanges();                
        }
        //Metodo de Atualizar 
        public void AtualizaDesenvolvedor(DESENVOLVEDORES dadosTela)
        {
            con.Entry(dadosTela).State = System.Data.Entity.EntityState.Modified;
            con.SaveChanges();
        }
        //Metodo de Deletar 
        public void DeletarDesenvolvedor(DESENVOLVEDORES dadosTela)
        {
            var entidade = con.desenvolvedores.FirstOrDefault(l => l.ID == dadosTela.ID);
            con.desenvolvedores.Remove(entidade);
            con.SaveChanges();
        }
        //Metodo de Pesquisar 
        public IReadOnlyList<DESENVOLVEDORES> ListaDesenvolvedores()
        {
            return con.desenvolvedores.AsNoTracking().ToList();
        }     
    }
}