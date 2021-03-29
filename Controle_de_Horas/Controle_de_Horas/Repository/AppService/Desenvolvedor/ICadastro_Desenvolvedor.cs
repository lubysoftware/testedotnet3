using Controle_de_Horas.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Controle_de_Horas.Repository.AppService.Desenvolvedor
{
    public interface ICadastro_Desenvolvedor
    {
        void Cadastrar(Cadastro_Desenvolvedor paramInsert);
        void Editar(Cadastro_Desenvolvedor paramEdit);
        IReadOnlyList<Cadastro_Desenvolvedor> ListarDev();
        void ExcluirItem(Cadastro_Desenvolvedor CodigoId);
    }
}
